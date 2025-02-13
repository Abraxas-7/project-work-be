const connection = require("../data/db");
const CustomError = require("../classes/CustomError");

function update(req, res) {
  const { id } = req.params;
  console.log("ID recuperato:", id);

  if (!id) return res.status(400).json({ error: "ID non trovato" });

  const modifyQuery = `
    UPDATE properties SET likes = likes + 1 WHERE id_properties = ?
`;

  const updateQuery = `
    SELECT likes FROM properties WHERE id_properties = ?
`;

  connection.query(modifyQuery, [id], (err, results) => {
    if (err) {
      console.error("Errore di query:", err);
      return res
        .status(500)
        .json(new CustomError("Errore durante l'incremento dei like", 500));
    }

    connection.query(updateQuery, [id], (err, results) => {
      if (err) {
        console.error("Errore di query:", err);
        return res
          .status(500)
          .json(new CustomError("Errore durante l'ottenimento dei like", 500));
      }

      if (results.length === 0) {
        return res.status(404).json(new CustomError("Casa non trovata", 404));
      }

      res.json({ likes: results[0].likes });
    });
  });
}

module.exports = { update };
