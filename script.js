"use strict";
class Product {
    constructor(productName, productPrice, servings) {
        this.productName = "";
        this.productPrice = 0;
        this.servings = 0;
        this.productName = productName;
        this.productPrice = productPrice;
        this.servings = servings;
    }
}
let products = [];
let inputs = [];
let pricePerServing = 0;
let total = 0;
let container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);
let productName = document.createElement("input");
productName.type = "text";
productName.required;
productName = productName;
productName.classList.add("productName");
let productLabel = document.createElement("label");
container.appendChild(productLabel);
productLabel.innerText = "Product name: ";
productLabel.appendChild(productName);
let productPrice = document.createElement("input");
productPrice.type = "number";
productPrice.required;
productPrice.classList.add("productPrice");
let priceLabel = document.createElement("label");
container.appendChild(priceLabel);
priceLabel.innerText = "Product Price: ";
priceLabel.appendChild(productPrice);
let productServings = document.createElement("input");
productServings.type = "number";
productServings.required;
productServings.classList.add("servings");
let servingsLabel = document.createElement("label");
container.appendChild(servingsLabel);
servingsLabel.innerText = "Servings: ";
servingsLabel.appendChild(productServings);
let addButton = document.createElement("button");
container.appendChild(addButton);
addButton.innerHTML = "Add Product";
addButton.classList.add("addButton");
let calculate = document.createElement("button");
container.appendChild(calculate);
calculate.innerHTML = "Calculate Price";
calculate.classList.add("addButton");
let days = document.createElement("input");
days.type = "number";
let daysLabel = document.createElement("label");
container.appendChild(daysLabel);
daysLabel.innerText = "Days: ";
daysLabel.appendChild(days);
function createProduct() {
    products.push(new Product(productName.value, parseInt(productPrice.value), parseInt(productServings.value)));
    localStorage.setItem("products", JSON.stringify(products));
}
addButton.addEventListener("click", createProduct);
calculate.addEventListener("click", calculatePrice);
let data = localStorage.getItem("products"); //get into a varaibel to deal with the 'does not exist' scenario
if (data) {
    products = JSON.parse(data);
}
function createCards() {
    for (let i = 0; i < products.length; i++) {
        let productHolder = document.createElement("div");
        document.body.appendChild(productHolder);
        productHolder.classList.add("cards");
        let name = document.createElement("p");
        productHolder.appendChild(name);
        name.innerHTML = "Product Name: " + products[i].productName;
        let price = document.createElement("p");
        productHolder.appendChild(price);
        price.innerHTML = "Product Price: " + products[i].productPrice;
        let servings = document.createElement("p");
        productHolder.appendChild(servings);
        servings.innerHTML = "Product Servings: " + products[i].servings;
        let pricePerConsumption = document.createElement("h4");
        productHolder.appendChild(pricePerConsumption);
        pricePerConsumption.innerHTML = "Price Per Consumption: " + products[i].productPrice / products[i].servings;
    }
}
let milk = document.createElement("input");
milk.type = "number";
let milkLabel = document.createElement("label");
container.appendChild(milkLabel);
milkLabel.innerText = "milk: ";
milkLabel.appendChild(milk);
let tea = document.createElement("input");
tea.type = "number";
let teaLabel = document.createElement("label");
container.appendChild(teaLabel);
teaLabel.innerText = "tea: ";
teaLabel.appendChild(tea);
let coffee = document.createElement("input");
coffee.type = "number";
let coffeeLabel = document.createElement("label");
container.appendChild(coffeeLabel);
coffeeLabel.innerText = "coffee: ";
coffeeLabel.appendChild(coffee);
let sugar = document.createElement("input");
sugar.type = "number";
let sugarLabel = document.createElement("label");
container.appendChild(sugarLabel);
sugarLabel.innerText = "sugar: ";
sugarLabel.appendChild(sugar);
inputs.push(milk, tea, coffee, sugar);
function calculatePrice() {
    let pricePerProduct = 0;
    let p = document.createElement("p");
    document.body.appendChild(p);
    for (let i = 0; i < products.length; i++) {
        pricePerServing = 0;
        pricePerProduct = 0;
        let key = products[i].productName;
        searchForProduct(key, products);
        pricePerProduct = pricePerServing * parseInt(inputs[i].value) * parseInt(days.value);
        total += pricePerProduct;
        if (isNaN(total)) {
            total = 0;
        }
    }
    p.innerText = `The price per term is: ${total}`;
}
createCards();
function searchForProduct(productName, products) {
    for (var i = 0; i < products.length; i++) {
        if (products[i].productName === productName) {
            let p = products[i].productPrice / products[i].servings;
            pricePerServing += p;
        }
    }
}
