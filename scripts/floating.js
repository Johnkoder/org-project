const images = [
  "./assets/images/pfps/waguri.jpg",
  "./assets/images/pfps/ruby.jpg",
  "./assets/images/pfps/alya-manga.jpg",
  "./assets/images/pfps/yamada.jpg",
  "./assets/images/coffee-cat.gif"
];

let currentIndex = 0;

function changeImage() {
  const imageElement = document.getElementById("floating-img");
  
  imageElement.style.opacity = 0;
  
  setTimeout(() => {
    if(currentIndex >= images.length) {
      currentIndex = 0;
      imageElement.src = images[currentIndex];
      imageElement.style.opacity = 100;
      currentIndex += 1;
    } else {
      imageElement.src = images[currentIndex];
      imageElement.style.opacity = 100;
      currentIndex += 1;
    }
  }, 250); 
}

document.getElementById("floating-img").addEventListener("click", changeImage);