const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Répertoire source des images HDR
const hdrDirectory = '../images/hdr';

// Répertoire de sortie pour les images JPG
const jpgDirectory = '../images/jpg';

// Assurez-vous que le répertoire de sortie existe
if (!fs.existsSync(jpgDirectory)) {
  fs.mkdirSync(jpgDirectory, { recursive: true });
}

fs.readdir(hdrDirectory, (err, files) => {
  if (err) {
    console.error('Error reading the directory:', err);
    return;
  }

  // Filtrer les fichiers HDR par extension (par exemple, .hdr)
  const hdrFiles = files.filter((file) => path.extname(file) === '.hdr');

  hdrFiles.forEach((hdrFile) => {
    const hdrFilePath = path.join(hdrDirectory, hdrFile);
    const jpgFileName = `${path.basename(hdrFile, '.hdr')}.jpg`;
    const jpgFilePath = path.join(jpgDirectory, jpgFileName);

    // Convertir l'image HDR en JPG
    sharp(hdrFilePath)
      .toFile(jpgFilePath, (err, info) => {
        if (err) {
          console.error(`Error converting ${hdrFile}:`, err);
        } else {
          console.log(`Converted ${hdrFile} to ${jpgFileName}`);
        }
      });
  });
});