// Liste des images locales
const images = [
    "images/couverture1.jpg",
    "images/couverture2.jpg",
    "images/couverture3.jpg"
  ];
  
  let currentIndex = 0;
  const hero = document.querySelector(".hero-section");
  
  function updateBackground() {
    hero.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
  }
  
  updateBackground();
  setInterval(updateBackground, 5000);
  