const express = require("express");
// create a server instance
const app = express();

// set costant to port
const port = process.env.PORT || 3000;

//Other imports
const errorsHandler = require("./middlewares/errorsHandles");
const notFound = require("./middlewares/notFound");
const corsPolicy = require("./middlewares/corsPolicy");

const properties = require("./routes/properties");
const reviews = require("./routes/reviews");
const messages = require("./routes/messages");
const likes = require("./routes/likes");
const images = require("./routes/images");

app.use(express.static("public"));
app.use(express.json());
app.use(corsPolicy);

app.get("/", (req, res) => {
  res.send("Home Page");
});

//principal route
app.use("/api/properties", properties);

//other routes
app.use("/api/properties", reviews);
app.use("/api/properties", messages);
app.use("/api/properties", likes);
app.use("/api/images", images);
// Middleware di errore e not found
app.use(errorsHandler);
app.use(notFound);

//server must listen on your host and your port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
