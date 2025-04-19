import { products } from './product.js';

const productContainer = document.getElementById("product-container");

function render() {
    productContainer.innerHTML = "";

    products.forEach(product => {
        const proele = document.createElement("div");

        proele.classList.add("product",
            "bg-white", "shadow-md", "rounded-lg", "overflow-hidden",
            "transform", "transition", "duration-300", "hover:scale-105"
        );

        proele.innerHTML = `
      <img src="${product.src}" alt="${product.name}" class="w-full h-72 object-cover">
      <div class="p-4">
        <h1 class=" font-semibold text-lg mb-2">${product.name}</h1>
        <p class="text-gray-800 text-base">₹${product.price}</p>
      </div>
    `;

        productContainer.appendChild(proele);
    });
}

render();



// Offer Close
var offclose = document.getElementById("offer-close")
var offers = document.getElementById("offer-bar")
offclose.addEventListener("click", function (event) {
    offers.classList.add("hidden")
})
// Mobile Navbar
var opennav = document.getElementById("menu-toggle")
var sidenav = document.getElementById("sideNavbar")
var navclose = document.getElementById("nav-close")
opennav.addEventListener("click", function (event) {
    sidenav.classList.add("left-[0%]")
})
navclose.addEventListener("click", function (event) {
    sidenav.classList.add("left-[-40%]")
})








// js for filters 
var filters = []
var tags = document.getElementsByName("tags");

Array.from(tags).forEach(tag => {
    tag.addEventListener("change", function (event) {
        if (event.target.checked) {
            filters.push(event.target.value)
            update()

        }
        else {
            filters = filters.filter(item => item != event.target.value)
            update()
        }
    });
});




function update() {
    const pros = document.querySelectorAll(".product");

    products.forEach((product, index) => {
        const isMatch = filters.length === 0 || product.tags.some(tag => filters.includes(tag));
        pros[index].style.display = isMatch ? "block" : "none";
    });
}



// search 







var conta=document.getElementById("product-container")
var searchInput=document.getElementById("search")

const productsList = document.querySelectorAll(".product");
searchInput.addEventListener("input", function(event) {
    const searchTerm = event.target.value.toUpperCase(); // Get the search term in uppercase
    

    productsList.forEach(product => {
        const productName = product.querySelector("h1").textContent.toUpperCase(); // Get the product name in uppercase

        if (productName.includes(searchTerm)) {
            product.style.display = "block"; // Show product if it matches search
        } else {
            product.style.display = "none"; // Hide product if it doesn't match search
        }
    });
});
