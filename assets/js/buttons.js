document.addEventListener('DOMContentLoaded', function () {
  const toggleSwitch = document.getElementById('toggleSwitch');
  const columns = document.querySelectorAll('.column');

  toggleSwitch.addEventListener("change", function () {
    if (toggleSwitch.checked) {
      // When the switch is active (checked)
      // Change the properties of all columns
      columns.forEach(function (column) {
        column.style.flex = "100%"; // Utilisez "1" pour que toutes les colonnes aient la même largeur
        column.style.maxWidth = "100%";
      });
    } else {
      // When the switch is inactive (unchecked)
      // Réinitialisez les propriétés de tous les colonnes
      columns.forEach(function (column) {
        column.style.flex = "";
        column.style.maxWidth = "";
      });
    }
  });
});

const downloadButton = document.getElementById('downloadButton');
const continueButton = document.getElementById('continueButton');
const cancelButton = document.getElementById('cancelButton');
const modal = document.getElementById('myModal');
const closeModal = document.getElementById('closeModal');
const images = document.querySelectorAll('.img-back img');

downloadButton.addEventListener('click', function () {
  modal.style.display = 'block';
});

continueButton.addEventListener('click', function () {
  modal.style.display = 'none';
  downloadImages();
});

cancelButton.addEventListener('click', function () {
  modal.style.display = 'none';
});

closeModal.addEventListener('click', function () {
  modal.style.display = 'none';
});

function downloadImages() {
  images.forEach((image) => {
    const a = document.createElement('a');
    a.href = image.src;
    a.download = image.alt;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
}
