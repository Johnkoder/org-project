const images = [
  "./assets/images/pfps/waguri.jpg",
  "./assets/images/pfps/ruby.jpg",
  "./assets/images/pfps/alya-manga.jpg",
  "./assets/images/pfps/yamada.jpg",
  "./assets/images/coffee-cat.gif"
];

let cIndex = 0;

function changeImage() {
  const imageElement = document.getElementById("floating-img");
  
  imageElement.style.opacity = 0;
  
  setTimeout(() => {
    if(cIndex >= images.length) {
      cIndex = 0;
      imageElement.src = images[cIndex];
      imageElement.style.opacity = 100;
      cIndex += 1;
    } else {
      imageElement.src = images[cIndex];
      imageElement.style.opacity = 100;
      cIndex += 1;
    }
  }, 250); 
}

document.getElementById("floating-img").addEventListener("click", changeImage);