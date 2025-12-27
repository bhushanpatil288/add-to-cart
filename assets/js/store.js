const countBadge = document.querySelectorAll(".countBadge");
const toyCardsContainer = document.querySelector(".toyCardsContainer"); 
const catFilterBtn = document.querySelector("#catFilterBtn");
const minMaxFilterBtn = document.querySelector("#minMaxFilterBtn");
const minSlider = document.querySelector("#min-range");
const maxSlider = document.querySelector("#max-range");
const minDisplay = document.querySelector(".minimum");
const maxDisplay = document.querySelector(".maximum");

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
  },
  {
    id: 9,
    name: "Colorful Building Bricks Box",
    category: "Building Toys",
    price: 22.99,
    vendor: "Creative Blocks Co.",
    ageGroup: "3-8 years",
    rating: 4.6,
    reviewsCount: 178,
    path: "./assets/media/images/product-imgs/product-9.png",
    quantity: 1
  },
  {
    id: 10,
    name: "Mini Crane Truck Toy",
    category: "Vehicle Toys",
    price: 17.49,
    vendor: "Little Movers",
    ageGroup: "3-7 years",
    rating: 4.4,
    reviewsCount: 94,
    path: "./assets/media/images/product-imgs/product-10.png",
    quantity: 1
  },
  {
    id: 11,
    name: "Butterfly Musical Guitar",
    category: "Musical Toys",
    price: 15.99,
    vendor: "Tiny Melodies",
    ageGroup: "3-6 years",
    rating: 4.5,
    reviewsCount: 132,
    path: "./assets/media/images/product-imgs/product-11.png",
    quantity: 1
  },
  {
    id: 12,
    name: "Soft Wooden Color Cubes",
    category: "Educational Toys",
    price: 13.75,
    vendor: "EduPlay Essentials",
    ageGroup: "2-5 years",
    rating: 4.8,
    reviewsCount: 221,
    path: "./assets/media/images/product-imgs/product-12.png",
    quantity: 1
  },
  {
    id: 13,
    name: "Surprise Toy Egg Set",
    category: "Collectible Toys",
    price: 9.99,
    vendor: "FunBox Collectibles",
    ageGroup: "3-8 years",
    rating: 4.1,
    reviewsCount: 305,
    path: "./assets/media/images/product-imgs/product-13.png",
    quantity: 1
  },
  {
    id: 14,
    name: "Cute Dinosaur Figure Trio",
    category: "Animal Toys",
    price: 12.49,
    vendor: "DinoLand Kids",
    ageGroup: "4-9 years",
    rating: 4.7,
    reviewsCount: 164,
    path: "./assets/media/images/product-imgs/product-14.png",
    quantity: 1
  },
  {
    id: 15,
    name: "Toddler Playtime Toy Set",
    category: "Toddler Toys",
    price: 26.99,
    vendor: "Happy Start Toys",
    ageGroup: "1-4 years",
    rating: 4.9,
    reviewsCount: 287,
    path: "./assets/media/images/product-imgs/product-15.png",
    quantity: 1
  }
];

const categories_filter = {
    1: 'Animal Toys',
    2: 'Building Toys',
    3: 'Character Toys',
    4: 'Collectible Toys',
    5: 'Educational Toys',
    6: 'Musical Toys',
    7: 'Outdoor & Pool Toys',
    8: 'Outdoor Playsets',
    9: 'PlayZone Outdoors',
    10: 'Robot Toys',
    11: 'Soft Toys',
    12: 'Toddler Toys',
    13: 'Vehicle Toys'
}


document.addEventListener('DOMContentLoaded', function(){
    renderProducts(products);
    updateBadge();

    // category filter
    catFilterBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        const catFilter = document.querySelector("#cat-filter").value;
        if(!catFilter){
            renderProducts(products);
            return;
        }
        const FilteredProducts = products.filter(product=> product.category === categories_filter[catFilter]);
        renderProducts(FilteredProducts);
    })

    // price range filter
    minSlider.addEventListener('change', ()=>{
        updateMin(minSlider.value)
    })
    maxSlider.addEventListener('change', ()=>{
        updateMax(maxSlider.value);
    })

    minMaxFilterBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        const minimumValue = minSlider.value;
        const maximumValue = maxSlider.value;
        
        const FilteredProducts = products.filter(product => product.price >= minimumValue && product.price <= maximumValue)
        renderProducts(FilteredProducts);
    })

})

function updateMin(value){
    minDisplay.innerHTML = value;
}

function updateMax(value){
    maxDisplay.innerHTML = value;
}

function loadLocalStorage(){
    const cart = JSON.parse(localStorage.getItem('cart'));
    if(!cart){
        return [];
    } else {
        return cart;
    }
}

function renderProducts(products){
    toyCardsContainer.innerHTML = "";
    products.forEach((product,idx)=>{
        toyCardsContainer.innerHTML += `
        <div class="col-12 col-md-6 col-xl-4 gy-4">
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

function saveLocalStorage(cart){
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateBadge(){
  const cart = loadLocalStorage(); 
  const q = cart.reduce((sum, item) => sum+=item.quantity, 0);
  countBadge.forEach(badge => badge.innerHTML = q);
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

function alreadyExists(id){
  const cart = loadLocalStorage();
  return cart.find(product=>product.id === id);
}