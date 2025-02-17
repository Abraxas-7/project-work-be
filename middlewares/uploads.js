const multer = require("multer");
const fs = require("fs");
const path = require("path");

function getPropertyFolderPath(propertyId) {
  const uploadDir = path.join(
    __dirname,
    "../public/uploads",
    `property_${propertyId}`
  );

  fs.mkdirSync(uploadDir, { recursive: true });

  return uploadDir;
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const { id } = req.params;
    const propertyFolderPath = getPropertyFolderPath(id);
    cb(null, propertyFolderPath);
  },
  filename: (req, file, cb) => {
    const { id } = req.params;
    const timestamp = Date.now();
    const fileExtension = path.extname(file.originalname);
    const fileName = `${id}_${timestamp}${fileExtension}`;
    cb(null, fileName);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 15 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith("image/")) {
      return cb(new Error("File non valido! Solo immagini sono permesse."));
    }
    cb(null, true);
  },
});

module.exports = upload;
