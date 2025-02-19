const connection = require("../data/db");
const CustomError = require("../classes/CustomError");

function index(req, res) {
  const query = `
    SELECT p.*, 
           (SELECT i.image_url FROM images i WHERE i.properties_id = p.id_properties LIMIT 1) AS first_image 
    FROM properties p ORDER BY p.likes DESC
  `;

  connection.query(query, (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Errore nel recupero delle proprietà" });
    }

    res.json({
      totalCount: results.length,
      data: results,
    });
  });
}

function show(req, res) {
  const { id } = req.params;

  const query = `
  SELECT 
    p.*, 
    (
      SELECT JSON_ARRAYAGG(image_url)
      FROM (
        SELECT DISTINCT i.image_url
        FROM images i
        WHERE i.properties_id = p.id_properties
      ) AS img_sub
    ) AS images,
    (
      SELECT JSON_ARRAYAGG(
        JSON_OBJECT(
          'id_review', rev_sub.id_review,
          'review_content', rev_sub.review_content,
          'user_name', rev_sub.user_name,
          'create_date', rev_sub.create_date
        )
      )
      FROM (
        SELECT DISTINCT r.id_review, r.review_content, r.user_name, r.create_date
        FROM reviews r
        WHERE r.properties_id = p.id_properties
        ORDER BY r.create_date DESC
      ) AS rev_sub
    ) AS reviews
  FROM properties p
  WHERE p.id_properties = ?;
`;

  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error("ErroreSQL:", err);
      return res
        .status(500)
        .json({ error: "Errore nel recupero della proprietà" });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: "Proprietà non trovata" });
    }

    res.json({ success: true, item: results[0] });
  });
}

function store(req, res) {
  const {
    title,
    host_name,
    rooms,
    beds,
    bathrooms,
    square_meters,
    contact_email,
    property_type,
    adress_city,
    adress_road,
    adress_hick_town,
  } = req.body;

  if (
    !title ||
    !host_name ||
    !rooms ||
    !beds ||
    !bathrooms ||
    !square_meters ||
    !contact_email ||
    !property_type ||
    !adress_city ||
    !adress_road ||
    !adress_hick_town
  ) {
    return res.status(400).json({
      error: "Tutti i campi sono obbligatori",
    });
  }

  const query = `
    INSERT INTO properties 
      (title, host_name, rooms, beds, bathrooms, square_meters, contact_email, property_type, adress_city, adress_road, adress_hick_town) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
  `;

  connection.query(
    query,
    [
      title,
      host_name,
      rooms,
      beds,
      bathrooms,
      square_meters,
      contact_email,
      property_type,
      adress_city,
      adress_road,
      adress_hick_town,
    ],
    (err, results) => {
      if (err) {
        console.error("Errore di query:", err);
        return res
          .status(500)
          .json(
            new CustomError("Errore durante l'inserimento del messaggio", 500)
          );
      }

      const newItem = {
        properties_id: results.insertId,
        title,
        host_name,
        rooms,
        beds,
        square_meters,
        contact_email,
        property_type,
        likes: 0,
        adress_city,
        adress_road,
        adress_hick_town,
      };

      res.status(201).json(newItem);
    }
  );
}
module.exports = { index, show, store };
