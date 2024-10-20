hotDrinks = [
  {
    img: "../assets/images/menu-imgs/cappucino.jpg",
    name: "Cappuccino",
    desc: "a mix of espresso, steamed milk, and foam, creating a rich and creamy coffee experience.",
    price: 10.99
  },
  {
    img: "../assets/images/menu-imgs/latte.jpg",
    name: "Latte",
    desc: "A smooth blend of espresso and steamed milk, topped with a light layer of foam.",
    price: 9.99
  },
  {
    img: "../assets/images/menu-imgs/americano.jpg",
    name: "Americano",
    desc: "A strong espresso shot, diluted with hot water for a simple yet rich coffee taste.",
    price: 8.99
  },
  {
    img: "../assets/images/menu-imgs/mocha.png",
    name: "Mocha",
    desc: "A fusion of espresso, steamed milk, and chocolate syrup, topped with whipped cream.",
    price: 11.49
  }
]

coldDrinks = [
  {
    img: "../assets/images/menu-imgs/iced-latte.jpg",
    name: "Iced Latte",
    desc: "A chilled blend of espresso and milk, served over ice for a refreshing coffee treat.",
    price: 9.99
  },
  {
    img: "../assets/images/menu-imgs/iced-mocha.jpg",
    name: "Iced Mocha",
    desc: "A cool mix of espresso, milk, and chocolate syrup, finished with whipped cream and ice.",
    price: 11.49
  },
  {
    img: "../assets/images/menu-imgs/iced-americano.jpg",
    name: "Iced Americano",
    desc: "A bold espresso shot over ice, diluted with cold water for a smooth, refreshing flavor.",
    price: 8.99
  },
  {
    img: "../assets/images/menu-imgs/cold-brew.jpg",
    name: "Cold Brew",
    desc: "Slow-steeped coffee served cold, delivering a rich and smooth flavor with lower acidity.",
    price: 10.49
  },
  {
    img: "../assets/images/menu-imgs/frappe.jpg",
    name: "Coffee Frappe",
    desc: "A blended coffee drink with ice, milk, and a hint of sweetness, topped with whipped cream.",
    price: 12.99
  },
  {
    img: "../assets/images/menu-imgs/iced-tea.jpg",
    name: "Iced Tea",
    desc: "Freshly brewed tea served chilled over ice, offering a light and refreshing taste.",
    price: 6.99
  }
]

pastries = [
  {
    img: "../assets/images/menu-imgs/croissant1.jpg",
    name: "Croissant",
    desc: "A buttery, flaky pastry that’s perfect for a light snack or breakfast treat.",
    price: 4.99
  },
  {
    img: "../assets/images/menu-imgs/muffin.jpg",
    name: "Blueberry Muffin",
    desc: "A soft, moist muffin packed with sweet, juicy blueberries and a hint of vanilla.",
    price: 3.99
  },
  {
    img: "../assets/images/menu-imgs/cinnamon-rolls.jpg",
    name: "Cinnamon Roll",
    desc: "A warm, gooey roll swirled with cinnamon sugar and topped with cream cheese icing.",
    price: 5.49
  },
  {
    img: "../assets/images/menu-imgs/scone.jpg",
    name: "Scone",
    desc: "A classic English scone with a crumbly texture, perfect with jam and cream.",
    price: 3.49
  },
  {
    img: "../assets/images/menu-imgs/chocolate-chip-cookie.jpg",
    name: "Chocolate Chip Cookie",
    desc: "A soft, chewy cookie loaded with rich chocolate chips, baked to perfection.",
    price: 2.99
  },
  {
    img: "../assets/images/menu-imgs/apple-pie.jpg",
    name: "Apple Pie",
    desc: "A slice of traditional apple pie with a golden crust and sweet, spiced apple filling.",
    price: 5.99
  }
]


const hotDrinksContainer = document.getElementById('hot-drinks-cont');
const coldDrinksContainer = document.getElementById('cold-drinks-cont');
const pastriesContainer = document.getElementById('pastries-cont');

function render(itemList, itemType) {
  let HTML = ``;

  itemList.forEach(item => {
    HTML += `
      <div class="item-card">
        <div class="item-img-container">
          <img src="${item.img}">
        </div>

        <div class="item-info-container">
          <div class="iten-info">
            <h2 class="item-name">${item.name}</h2>
            <p class="item-desc">${item.desc}</p>
            <div class="item-price">$${item.price}</div>
            </div>
            
          <button class="add-to-cart-btn">Add to Cart ></button>
        </div>
      </div>
    `;
  });

  if(itemType === "hot") {
    hotDrinksContainer.innerHTML = HTML;
  } else if(itemType === "cold") {
    coldDrinksContainer.innerHTML = HTML;
  } else if(itemType === "pastries") {
    pastriesContainer.innerHTML = HTML;
  }
}

render(hotDrinks, "hot");
render(coldDrinks, "cold");
render(pastries, "pastries");



// Cart script

const cartBtn = document.getElementById('cart-btn');
const viewCartCloseBtn = document.getElementById('view-cart-close-btn');
const viewCartModal = document.getElementById('view-cart-modal');
const viewCartConfirmBtn = document.getElementById('view-cart-confirm-btn');
const itemsBtn = document.querySelectorAll('.add-to-cart-btn');

const cart = [];
console.log(itemsBtn)

cartBtn.addEventListener('click', () => {
  viewCartModal.showModal();
});

viewCartCloseBtn.addEventListener('click', () => {
  viewCartModal.close();
})

viewCartConfirmBtn.addEventListener('click', () => {
  alert("Your order is complete!");
  viewCartModal.close();
})