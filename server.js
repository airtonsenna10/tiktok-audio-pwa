
const express = require('express');
const multer = require('multer');
const ffmpeg = require('fluent-ffmpeg');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

app.post('/upload', upload.single('video'), (req, res) => {
  const inputPath = req.file.path;
  const outputPath = `audios/${Date.now()}.mp3`;

  ffmpeg(inputPath)
    .output(outputPath)
    .on('end', () => {
      fs.unlinkSync(inputPath);
      res.download(outputPath, () => fs.unlinkSync(outputPath));
    })
    .on('error', err => res.status(500).send(err))
    .run();
});

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
