const { nanoid } = require("nanoid");

const multer = require("multer");

const fileUploader = ({
  destinationFolder = "",
  prefix = "POST",
  fileType = "image",
}) => {
  const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `${__dirname}/../public/${destinationFolder}`);
    },
    filename: (req, file, cb) => {
      const fileExtension = file.mimetype.split("/")[1];

      const filename = `${prefix}_${nanoid()}.${fileExtension}`;

      cb(null, filename);
    },
  });
  const fileSize = 1048576;
  const uploader = multer({
    storage: storageConfig,
    limits: { fileSize },
    fileFilter: (req, file, cb) => {
      console.log(file);
      if (file.mimetype.split("/")[0] != fileType) {
        return cb(null, false);
      }
      const fileSize = parseInt(req.headers["content-length"]);
      console.log(fileSize);
      if (fileSize > 1048576) {
        return cb(null, true);
      }
      cb(null, true);
    },
  });

  return uploader;
};

module.exports = fileUploader;
