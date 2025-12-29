// constants
const products = [
  {
    id: 1,
    name: "Musical Guitar & Maracas Set",
    category: "Musical Toys",
    price: 24.99,
    vendor: "Happy Tunes Toys",
    ageGroup: "3-6 years",
    rating: 4.6,
    reviewsCount: 124,
    path: "./assets/media/images/product-imgs/product-1.png",
    quantity: 1
  },
  {
    id: 2,
    name: "Parrot Swim Ring Float",
    category: "Outdoor & Pool Toys",
    price: 18.49,
    vendor: "Splash & Play Co.",
    ageGroup: "4-8 years",
    rating: 4.4,
    reviewsCount: 89,
    path: "./assets/media/images/product-imgs/product-2.png",
    quantity: 1
  },
  {
    id: 3,
    name: "Construction Dump Truck Blocks",
    category: "Building Toys",
    price: 29.99,
    vendor: "BuildSmart Kids",
    ageGroup: "3-7 years",
    rating: 4.7,
    reviewsCount: 156,
    path: "./assets/media/images/product-imgs/product-3.png",
    quantity: 1
  },
  {
    id: 4,
    name: "Teddy Bear Cupcake Plush",
    category: "Soft Toys",
    price: 16.75,
    vendor: "CuddleCraft",
    ageGroup: "2-5 years",
    rating: 4.8,
    reviewsCount: 203,
    path: "./assets/media/images/product-imgs/product-4.png",
    quantity: 1
  },
  {
    id: 5,
    name: "Kids Playground Slide Set",
    category: "Outdoor Playsets",
    price: 89.99,
    vendor: "PlayZone Outdoors",
    ageGroup: "4-10 years",
    rating: 4.5,
    reviewsCount: 67,
    path: "./assets/media/images/product-imgs/product-5.png",
    quantity: 1
  },
  {
    id: 6,
    name: "Friendly Monster Gift Toy",
    category: "Character Toys",
    price: 21.5,
    vendor: "Monster Fun Factory",
    ageGroup: "5-9 years",
    rating: 4.3,
    reviewsCount: 98,
    path: "./assets/media/images/product-imgs/product-6.png",
    quantity: 1
  },
  {
    id: 7,
    name: "Wooden Numbers & Blocks Set",
    category: "Educational Toys",
    price: 19.95,
    vendor: "Learn & Play Woodworks",
    ageGroup: "3-6 years",
    rating: 4.9,
    reviewsCount: 312,
    path: "./assets/media/images/product-imgs/product-7.png",
    quantity: 1
  },
  {
    id: 8,
    name: "Classic Wind-Up Robot Toy",
    category: "Robot Toys",
    price: 14.99,
    vendor: "RetroToy Makers",
    ageGroup: "6-10 years",
    rating: 4.2,
    reviewsCount: 141,
    path: "./assets/media/images/product-imgs/product-8.png",
    quantity: 1
  }
];



const toyCardsContainer = document.querySelector(".toyCardsContainer");
const countBadge = document.querySelector(".countBadge");


document.addEventListener("DOMContentLoaded", function(){
    renderProducts(products);
    updateBadge();
})

function renderProducts(products){
    const cart = loadLocalStorage();
    toyCardsContainer.innerHTML = "";
    let isAlreadyInCart = false;
    products.forEach((product,idx)=>{
        if (cart.some(item=>item.id === product.id)){
          isAlreadyInCart = true;
        } else {
          isAlreadyInCart = false;
        }
        if(!isAlreadyInCart){
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
                    <button onClick="addToCart(${product.id})" class="add-to-cart-btn add-to-cart-btn-${product.id} d-flex justify-content-center align-items-center gap-1 mt-3 mb-2">
                      <span class="fs-5"><i class="ri-shopping-bag-4-line"></i></span>
                      <p class="m-0">Add to cart</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
        `
        }
        else {
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
                    <button onClick="addToCart(${product.id})" class="add-to-cart-btn add-to-cart-btn-${product.id} d-flex justify-content-center align-items-center gap-1 mt-3 mb-2">
                      <span class="fs-5"><i class="ri-checkbox-circle-fill"></i></span>
                      <p class="m-0">Added to cart</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
        `
        }
    })
}

function alreadyExists(id){
  const cart = loadLocalStorage();
  return cart.find(product=>product.id === id);
}

function addToCart(id){
  const clickedBtn = document.querySelector(`.add-to-cart-btn-${id}`);
  const cart = loadLocalStorage();
  if(alreadyExists(id)){
    clickedBtn.innerHTML = `<span class="fs-5"><i class="ri-shopping-bag-4-line"></i></span>
                            <p class="m-0">Add to cart</p>`;
    const idx = cart.findIndex(item => item.id === id);                       
    cart.splice(idx, 1);
    saveLocalStorage(cart);
    updateBadge();
    return;
  }
  const product = products.find(p => id === p.id);
  cart.push({...product, quantity: 1});
  clickedBtn.innerHTML = `<span class="fs-5"><i class="ri-checkbox-circle-fill"></i></span>
                          <p class="m-0">Added to cart</p>`;
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