// Data
const reviews = [
  {
    img: "./assets/images/reviews-imgs/abt-member-img1.jpg",
    name: "Lebron James",
    parag: "Absolutely love this place! The coffee is always fresh, and the atmosphere is so cozy. The staff is friendly and they always make me feel right at home. Definitely my go-to spot for a morning pick-me-up!"
  },
  {
    img: "./assets/images/reviews-imgs/abt-member-img2.png",
    name: "Walter White",
    parag: "The vibe here is so welcoming, and the coffee is hands down the best in town. I love trying their seasonal specials they never disappoint! Also, My name is Heisenberg."
  },
  {
    img: "./assets/images/reviews-imgs/abt-member-img3.png",
    name: "Maria R.",
    parag: "A hidden gem! The customer service is top-notch, and the coffee is crafted with such care. I always leave with a smile on my face. I love this more than my fortnite battle pass. 100% rizz approved."
  }
];

// Elements
const reviewsContainer = document.getElementById("reviews-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");


let currentIndex = 0;

function displayReview(index) {
  const review = reviews[index];

  setTimeout(() => {
    reviewsContainer.innerHTML = `
    <div class="review">
      <img class="review-pfp" src="${review.img}">
      <h2 class="review-name">${review.name}</h2>

      <div class="review-parag-container">
        <img class="quote-left" src="./assets/icons/quote-left.svg">
        <p class="review-parag">${review.parag}</p>
        <img class="quote-right" src="./assets/icons/quote-right.svg">
      </div>

      <div class="star-container">
        <img src="./assets/icons/star.svg">
        <img src="./assets/icons/star.svg">
        <img src="./assets/icons/star.svg">
        <img src="./assets/icons/star.svg">
        <img src="./assets/icons/star.svg">
      </div>
    </div>
  `;

  const slide = document.querySelector(".review");
  slide.style.opacity = 1;
  }, 400);
}

displayReview(currentIndex);


function prevSlide() {
  const slide = document.querySelector(".review");
  slide.style.opacity = 0;

  currentIndex = (currentIndex === 0) ? reviews.length - 1 : currentIndex - 1;
  displayReview(currentIndex);
}

function nextSlide() {
  const slide = document.querySelector(".review");
  slide.style.opacity = 0;

  currentIndex = (currentIndex === reviews.length - 1) ? 0 : currentIndex + 1;
  displayReview(currentIndex);
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);




