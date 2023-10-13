const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Chemin du répertoire contenant les images HDR
const inputDirectory = "assets/images/hdr";

// Chemin du répertoire où seront stockées les versions prévisualisées en JPG
const outputDirectory = 'assets/images/jpg';

// Créez le répertoire de sortie s'il n'existe pas
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory);
}

// Taille maximale pour les prévisualisations en pixels (ajustez selon vos besoins)
const maxWidth = 800;
const maxHeight = 800;

// Liste tous les fichiers du répertoire d'entrée
fs.readdir(inputDirectory, (err, files) => {
  if (err) {
    console.error('Erreur de lecture du répertoire d\'entrée :', err);
    return;
  }

  files.forEach((filename) => {
    if (filename.endsWith('.jpg') || filename.endsWith('.jpeg')) {
      const inputPath = path.join(inputDirectory, filename);
      const outputPath = path.join(outputDirectory, filename);

      sharp(inputPath)
        .resize(maxWidth, maxHeight, {
          fit: sharp.fit.inside,
          withoutEnlargement: true,
        })
        .toFile(outputPath, (err, info) => {
          if (err) {
            console.error('Erreur lors de la génération de la prévisualisation :', err);
          } else {
            console.log(`Prévisualisation générée pour ${filename}`);
          }
        });
    }
  });
});
