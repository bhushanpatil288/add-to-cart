// constants
const products = [
  {
    id: 1,
    name: "Musical Guitar & Maracas Set",
    category: "Musical Toys",
    price: 24.99,
    vendor: "Happy Tunes Toys",
    path: "./assets/media/images/product-imgs/product-1.png",
    quantity: 1
  },
  {
    id: 2,
    name: "Parrot Swim Ring Float",
    category: "Outdoor & Pool Toys",
    price: 18.49,
    vendor: "Splash & Play Co.",
    path: "./assets/media/images/product-imgs/product-2.png",
    quantity: 1
  },
  {
    id: 3,
    name: "Construction Dump Truck Blocks",
    category: "Building Toys",
    price: 29.99,
    vendor: "BuildSmart Kids",
    path: "./assets/media/images/product-imgs/product-3.png",
    quantity: 1
  },
  {
    id: 4,
    name: "Teddy Bear Cupcake Plush",
    category: "Soft Toys",
    price: 16.75,
    vendor: "CuddleCraft",
    path: "./assets/media/images/product-imgs/product-4.png",
    quantity: 1
  },
  {
    id: 5,
    name: "Kids Playground Slide Set",
    category: "Outdoor Playsets",
    price: 89.99,
    vendor: "PlayZone Outdoors",
    path: "./assets/media/images/product-imgs/product-5.png",
    quantity: 1
  },
  {
    id: 6,
    name: "Friendly Monster Gift Toy",
    category: "Character Toys",
    price: 21.5,
    vendor: "Monster Fun Factory",
    path: "./assets/media/images/product-imgs/product-6.png",
    quantity: 1
  },
  {
    id: 7,
    name: "Wooden Numbers & Blocks Set",
    category: "Educational Toys",
    price: 19.95,
    vendor: "Learn & Play Woodworks",
    path: "./assets/media/images/product-imgs/product-7.png",
    quantity: 1
  },
  {
    id: 8,
    name: "Classic Wind-Up Robot Toy",
    category: "Robot Toys",
    price: 14.99,
    vendor: "RetroToy Makers",
    path: "./assets/media/images/product-imgs/product-8.png",
    quantity: 1
  },
];


const toyCardsContainer = document.querySelector(".toyCardsContainer");
const countBadge = document.querySelector(".countBadge");


document.addEventListener("DOMContentLoaded", function(){
    renderProducts();
    updateBadge();
})

function renderProducts(){
    toyCardsContainer.innerHTML = "";
    products.forEach((product,idx)=>{
        toyCardsContainer.innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-xl-3 gy-4">
            <div class="toy-card bg-white px-3 py-2 rounded-4 shadow">
              <div class="overflow-hidden">
                <img class="img-fluid" src="${product.path}" alt="${product.name}">
              </div>
              <div class="d-flex justify-content-around flex-column">
                <div>
                    <p class="category">${product.category}</p>
                    <h3>${product.name}</h3>    
                    <p class="price text-primary-custom fs-2 fw-semibold m-0">$${(product.price).toFixed(2)}</p>
                </div>
                <div class="d-flex justify-content-center align-items-center gap-3">
                  <button onClick="addToCart(${product.id})" class="add-to-cart-btn d-flex justify-content-center align-items-center gap-1 mt-3 mb-2">
                    <span class="fs-5"><i class="ri-shopping-bag-4-line"></i></span>
                    <p class="m-0">Add to cart</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
      `
    })
}

function alreadyExists(id){
  const cart = loadLocalStorage();
  return cart.find(product=>product.id === id);
}

function addToCart(id){
  const cart = loadLocalStorage();
  if(alreadyExists(id)){
    const idx = cart.findIndex(product => product.id === id);
    cart[idx].quantity++;

    saveLocalStorage(cart);

    updateBadge();
    return;
  }
  const product = products.find(p => id === p.id);
  cart.push({...product, quantity: 1});
  saveLocalStorage(cart);
  updateBadge();
}

function loadLocalStorage(){
    const cart = JSON.parse(localStorage.getItem('cart'));
    if(!cart){
        return [];
    } else {
        return cart;
    }
}

function saveLocalStorage(cart){
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateBadge(){
  const cart = loadLocalStorage(); 
  const q = cart.reduce((sum, item) => sum+=item.quantity, 0);
  countBadge.innerHTML = q;
}