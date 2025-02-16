const connection = require("../data/db");
const CustomError = require("../classes/CustomError");

function index(req, res) {
  const { id } = req.params;
  console.log("ID proprietà ricevuto:", id);

  if (!id) {
    return res.status(400).json({ error: "Parametro 'id' mancante" });
  }

  const query = `
    SELECT * FROM reviews 
    WHERE properties_id = ?
  `;

  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error("Errore di query:", err);
      return res
        .status(500)
        .json({ error: "Errore durante il recupero delle recensioni" });
    }

    res.json({
      totalCount: results.length,
      data: results,
    });
  });
}



function store(req, res) {
  const { id } = req.params;
  console.log("ID proprietà ricevuto:", id);

  const { user_name, review_content, start_date, end_date } = req.body;

  if (!id || !user_name || !review_content || !start_date || !end_date) {
    return res.status(400).json({
      error:
        "Tutti i campi (user_name, review_content, start_date, end_date) sono obbligatori",
    });
  }

  const query = `
    INSERT INTO reviews(properties_id, user_name, review_content, start_date, end_date)
  VALUES(?, ?, ?, ?, ?)
    `;

  connection.query(
    query,
    [id, user_name, review_content, start_date, end_date],
    (err, results) => {
      if (err) {
        console.error("Errore di query:", err);
        return res
          .status(500)
          .json(
            new CustomError("Errore durante l'inserimento del messaggio", 500)
          );
      }

      const newReview = {
        id_review: results.insertId,
        properties_id: id,
        user_name,
        review_content,
        start_date,
        end_date,
        create_date: new Date().toISOString(),
      };

      res.status(201).json(newReview);
    }
  );
}

module.exports = { index, store };
