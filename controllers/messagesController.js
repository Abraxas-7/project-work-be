const connection = require("../data/db");
const CustomError = require("../classes/CustomError");

function store(req, res) {
  const { id } = req.params;
  console.log("ID recuperato:", id);

  const user_email = req.body.user_email;
  const content = req.body.content;

  if (!id || !user_email || !content) {
    return res.status(400).json({
      error: "Tutti i campi (user_email, content) sono obbligatori",
    });
  }

  const query = `
    INSERT INTO messages (properties_id, user_email, content)
    VALUES (?, ?, ?)
  `;

  connection.query(query, [id, user_email, content], (err, results) => {
    if (err) {
      console.error("Errore di query:", err);
      return res
        .status(500)
        .json(
          new CustomError("Errore durante l'inserimento del messaggio", 500)
        );
    }

    const newItem = {
      id_messages: results.insertId,
      properties_id: id,
      user_email,
      content,
    };

    res.status(201).json(newItem);
  });
}

module.exports = { store };
