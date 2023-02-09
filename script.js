//service cards
const serviceItems = document.querySelector(".service-header-navigation");
const arrItems = document.querySelectorAll(".service-button");
const arrCards = document.querySelectorAll(".service-card")

serviceItems.addEventListener("click", (event) => {
  event.preventDefault();

  console.log(event.target.textContent);
  [...arrItems].forEach(item => item.classList.remove("service-button-active"));

  if (event.target.textContent === "Gardens") {
    [...arrCards].forEach(item => {
      item.classList.contains("garden-card") ? item.classList.remove("service-card-blur") : item.classList.add("service-card-blur");
    })
  }

  if (event.target.textContent === "Lawn") {
    [...arrCards].forEach(item => {
      item.classList.contains("lawn-card") ? item.classList.remove("service-card-blur") : item.classList.add("service-card-blur");
    })
  }

  if (event.target.textContent === "Planting") {
    [...arrCards].forEach(item => {
      item.classList.contains("planting-card") ? item.classList.remove("service-card-blur") : item.classList.add("service-card-blur");
    })
  }

  event.target.classList.toggle("service-button-active");
})

// Prices
const priceCardsObj = [
  {
    title: "Basics",
    information: "Release of Letraset sheets containing Lorem Ipsum passages, and more recently",
    price: 15,
  },
  {
    title: "Standard",
    information: "Release of Letraset sheets containing Lorem Ipsum passages, and more recently",
    price: 25,
  },
  {
    title: "Pro care",
    information: "Release of Letraset sheets containing Lorem Ipsum passages, and more recently",
    price: 35,
  }
]

const priceCards = document.querySelectorAll(".prices-item");
const priceIconButton = document.querySelectorAll(".prices-icon-button");
const priceItemBody = document.querySelectorAll(".price-item-body");
const priceBodyButtons = document.querySelectorAll(".price-item-body-button")

let arrPriceItems = [...priceCards];

function classToggle(arr, index, className) {
  if (arr[index].classList.contains(className)) {
    arr[index].classList.remove(className)
  } else {
    arr.forEach(item => item.classList.remove(className));
    arr[index].classList.add(className);
  }
}

arrPriceItems.forEach(item => {
  item.addEventListener("click", (event) => {
    let index = arrPriceItems.indexOf(event.target.closest(".prices-item"));
    classToggle(arrPriceItems, index, "price-item-active");
    classToggle([...priceIconButton], index, "price-icon-button-active");
    classToggle([...priceItemBody], index, "price-item-body-active")
  })
})

// contacts us
const contactsArr = [
  {
    city: "Yonkers, NY",
    phone: "+1	914	678 0003",
    address: "511 Warburton Ave"
  },
  {
    city: "Canandaigua, NY",
    phone: "+1	585	393 0001",
    address: "151 Charlotte Street"
  },
  {
    city: "Sherrill, NY",
    phone: "+1	315	908 0004",
    address: "14 WEST Noyes BLVD"
  },
  {
    city: "New York City",
    phone: "+1	212	456 0002",
    address: "9 East 91st Street"
  },
]

const cityButton = document.querySelector(".aside-city-button");
const addresses = document.querySelector(".contacts-city-items");
const addressCard = document.querySelector(".contacts-card");
const contactsImage = document.querySelector(".contacts-image");

cityButton.addEventListener("click", () => {
  addressCard.classList.remove("contacts-card-active");
  cityButton.classList.toggle("aside-city-button-active");
  addresses.classList.toggle("contacts-city-items-active");
  if (window.screen.width < 769) {
    contactsImage.classList.add("hidden");
  }
  // contactsImage.classList.toggle("contacts-image-active");
})

addresses.addEventListener("click", (event) => {
  let currentItem = event.target.closest("li").textContent;
  cityButton.textContent = currentItem;
  cityButton.classList.remove("aside-city-button-active");
  addresses.classList.remove("contacts-city-items-active");
  contactsArr.forEach(item => {
    if (item.city === currentItem) {
      document.getElementById("contacts-card-city-name").textContent = item.city;
      document.getElementById("contacts-card-city-phone").textContent = item.phone;
      document.getElementById("contacts-card-city-address").textContent = item.address;
    }
  })

  addressCard.classList.add("contacts-card-active");
})

//burger

const burgerButton = document.querySelector(".burger-button");
const burgerMenu = document.querySelector(".header-navigation");
const burgerMenuItems = document.querySelector(".header-navigation-items");

burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("burger-button-active");
  burgerMenu.classList.toggle("header-navigation-mobile");
  burgerMenuItems.classList.toggle("header-navigation-items-mobile");
  burgerMenu.addEventListener("click", () => {
    burgerButton.classList.remove("burger-button-active");
    burgerMenu.classList.remove("header-navigation-mobile");
    burgerMenuItems.classList.remove("header-navigation-items-mobile");
  })
})

window.addEventListener('resize', function (event) {
  if (event.target.innerWidth > 700) {
    burgerButton.classList.remove("burger-button-active");
    burgerMenu.classList.remove("header-navigation-mobile");
    burgerMenuItems.classList.remove("header-navigation-items-mobile")
  }
});