const connection = require("../data/db");
const CustomError = require("../classes/CustomError");

function index(req, res) {
  const query = "";

  connection.query(query, (err, results) => {
    if (err) {
      throw new CustomError("Errore durante il recupero delle proprietà", 500);
    }
    const response = {
      totalCount: results.length,
      data: results,
    };
    res.json(response);
  });
}

function show(req, res) {
  const id = parseInt(req.params.id);
  const query = "";

  connection.query(query, [id], (err, results) => {
    if (err) {
      throw new CustomError("Errore durante il recupero della proprietà", 500);
    }
    if (results.length === 0) {
      throw new CustomError("L'elemento non esiste", 404);
    }
    res.json({ success: true, item: results[0] });
  });
}

function store(req, res) {
  const title = req.body.title;
  const query = "";

  connection.query(query, [title], (err, results) => {
    if (err) {
      throw new CustomError(
        "Errore durante l'inserimento della proprietà",
        500
      );
    }
    const newItem = {
      /* blabla */
    };
    res.status(201).json(newItem);
  });
}

function destroy(req, res) {
  const id = parseInt(req.params.id);
  const query = "";

  connection.query(query, [id], (err, results) => {
    if (err) {
      throw new CustomError(
        "Errore durante l'eliminazione della proprietà",
        500
      );
    }
    if (results.affectedRows === 0) {
      throw new CustomError("L'elemento non esiste", 404);
    }
    res.sendStatus(204);
  });
}

module.exports = { index, show, store, destroy };
