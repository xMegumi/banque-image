const fs = require('fs');
const path = require('path');

const imageDirectory = '../images/jpg/';
const outputFileName = 'imageList.js';

fs.readdir(imageDirectory, (err, files) => {
  if (err) {
    console.error('Error reading the directory:', err);
    return;
  }

  // Filtrer les fichiers d'images par extension (par exemple, .jpg)
  const imageFiles = files.filter((file) => path.extname(file) === '.jpg');

  // Générer un fichier JavaScript contenant la liste d'images
  const outputData = `const imageFileNames = ${JSON.stringify(imageFiles)};`;

  fs.writeFile(outputFileName, outputData, (err) => {
    if (err) {
      console.error('Error writing the output file:', err);
    } else {
      console.log('Image list has been generated.');
    }
  });
});