const connection = require("../data/db");
const CustomError = require("../classes/CustomError");

function store(req, res) {
  const { id } = req.params;
  console.log("ID recuperato:", id);

  if (!id || !req.files || req.files.length === 0) {
    return res.status(400).json({ error: "Nessun file caricato" });
  }

  const uploadedFiles = [];
  let completedQueries = 0;
  let errorsOccurred = false;

  req.files.forEach((file) => {
    const filePath = `/uploads/property_${id}/${file.filename}`;

    const query = `
      INSERT INTO images (properties_id, image_url) 
      VALUES (?, ?)
    `;

    connection.query(query, [id, filePath], (err, result) => {
      if (err) {
        console.error("Errore di query:", err);
        if (!errorsOccurred) {
          errorsOccurred = true;
          return res
            .status(500)
            .json(
              new CustomError("Errore durante l'inserimento dell'immagine", 500)
            );
        }
      } else {
        uploadedFiles.push({
          id: result.insertId,
          filename: file.filename,
          imageUrl: filePath,
          originalName: file.originalname,
        });
      }

      completedQueries++;

      if (completedQueries === req.files.length && !errorsOccurred) {
        return res.json({
          message: "Immagini caricate e salvate nel database con successo",
          files: uploadedFiles,
        });
      }
    });
  });
}

module.exports = { store };
