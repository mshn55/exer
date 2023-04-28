const products = [
  {
    title: "Bottle 1",
    image: "img/bottle-glas.jpg",
    price: "CHF 30.00",
    material:"Glas",
    isAvailable: true,
    color: ["Green","Blue", "Yellow" ]
  },
   {
    title: "Bottle 1",
    image: "img/bottle-green.jpg",
    price: "CHF 30.00",
    material:"Glas",
    isAvailable: true,
    color: ["Green","Blue", "Yellow" ]
  },
   {
    title: "Bottle 1",
    image: "img/bottle-grey.jpg",
    price: "CHF 30.00",
    material:"Glas",
    isAvailable: true,
    color: ["Green","Blue", "Yellow" ]
  },
   {
    title: "Bottle 1",
    image: "img/bottle-white.jpg",
    price: "CHF 30.00",
    material:"Glas",
    isAvailable: true,
    color: ["Green","Blue", "Yellow" ]
  },
   {
    title: "Bottle 1",
    image: "img/bottle-white-2.jpg",
    price: "CHF 30.00",
    material:"Glas",
    isAvailable: true,
    color: ["Green","Blue", "Yellow" ]
  },
   {
    title: "Bottle 1",
    image: "img/bottle-wood.jpg",
    price: "CHF 30.00",
    material:"Glas",
    isAvailable: true,
    color: ["Green","Blue", "Yellow" ]
  },   
]
                /*  <article>
                      <img src="" alt="">
                      <h4>Title</h4>
                      <p>Price</p>
                      <p>Color</p>
                      <p>material</p>
                      <button> add to cart</button>
                 </article> */

const shop = document.querySelector(".shop");

products.forEach(product) => { 
  if (product.isAvailable){
 /*   shop.innerHTML +=  `
<article>
    <img src=${product.image} alt="" >
    <h4>${product.title}</h4>
    <p>Price${product.price}</p>
    <p>Color${product.color}[0]</p>
    <p>material${product.material}</p>
    <button> add to cart</button>
</article>; ``
*/
const article = document.createElement("article");
const img = document.createElement("img");
img.src = product.image;
img.alt = product.title;
article.appendChild(img);

const title= document.createElement("h4");
title.textContent = product.title;
article.appendChild(title);

const Price= document.createElement("h4");
Price.textContent = product.Price;
article.appendChild(Price);

const color= document.createElement("h4");
color.textContent = product.color;
article.appendChild(color);

const material= document.createElement("h4");
material.textContent = product.material;
article.appendChild(material);

const button = document,createElement("button");
button.textContent = "Add to Cart";
article.appendChild(button);

  }
});