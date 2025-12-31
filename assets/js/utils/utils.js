export const toyCardsContainer = document.querySelector(".toyCardsContainer");
export const countBadge = document.querySelectorAll(".countBadge");

export function addToCart(id) {
  const clickedBtn = document.querySelector(`.add-to-cart-btn-${id}`);
  const cart = loadLocalStorage();
  if (alreadyExists(id)) {
    clickedBtn.innerHTML = `<span class="fs-5"><i class="ri-shopping-bag-4-line"></i></span>
                            <p class="m-0">Add to cart</p>`;
    const idx = cart.findIndex((item) => item.id === id);
    cart.splice(idx, 1);
    saveLocalStorage(cart);
    updateBadge();
    fireToast("info", "Removed from cart");
    return;
  }
  const product = products.find((p) => id === p.id);
  cart.push({ ...product, quantity: 1 });
  clickedBtn.innerHTML = `<span class="fs-5"><i class="ri-checkbox-circle-fill"></i></span>
                          <p class="m-0">Added to cart</p>`;
  saveLocalStorage(cart);
  updateBadge();
  fireToast("success", "Added to cart");
}

export function alreadyExists(id) {
  const cart = loadLocalStorage();
  return cart.find((product) => product.id === id);
}

export function renderProducts(products) {
  const cart = loadLocalStorage();
  toyCardsContainer.innerHTML = "";
  let isAlreadyInCart = false;
  products.forEach((product, idx) => {
    if (cart.some((item) => item.id === product.id)) {
      isAlreadyInCart = true;
    } else {
      isAlreadyInCart = false;
    }
    if (!isAlreadyInCart) {
      toyCardsContainer.innerHTML += `
          <div class="col-12 col-md-6 col-xl-4 gy-4">
              <div class="toy-card bg-white px-3 py-2 rounded-4 shadow">
                <div class="overflow-hidden">
                  <img class="img-fluid" src="${product.path}" alt="${
        product.name
      }">
                </div>
                <div class="d-flex justify-content-around flex-column">
                  <div>
                      <p class="category">${product.category}</p>
                      <h3>${product.name}</h3>    
                      <p class="price text-primary-custom fs-2 fw-semibold m-0">$${product.price.toFixed(
                        2
                      )}</p>
                  </div>
                  <div class="d-flex justify-content-center align-items-center gap-3">
                    <button onClick="addToCart(${
                      product.id
                    })" class="add-to-cart-btn add-to-cart-btn-${
        product.id
      } d-flex justify-content-center align-items-center gap-1 mt-3 mb-2">
                      <span class="fs-5"><i class="ri-shopping-bag-4-line"></i></span>
                      <p class="m-0">Add to cart</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
        `;
    } else {
      toyCardsContainer.innerHTML += `
          <div class="col-12 col-md-6 col-xl-4 gy-4">
              <div class="toy-card bg-white px-3 py-2 rounded-4 shadow">
                <div class="overflow-hidden">
                  <img class="img-fluid" src="${product.path}" alt="${
        product.name
      }">
                </div>
                <div class="d-flex justify-content-around flex-column">
                  <div>
                      <p class="category">${product.category}</p>
                      <h3>${product.name}</h3>    
                      <p class="price text-primary-custom fs-2 fw-semibold m-0">$${product.price.toFixed(
                        2
                      )}</p>
                  </div>
                  <div class="d-flex justify-content-center align-items-center gap-3">
                    <button onClick="addToCart(${
                      product.id
                    })" class="add-to-cart-btn add-to-cart-btn-${
        product.id
      } d-flex justify-content-center align-items-center gap-1 mt-3 mb-2">
                      <span class="fs-5"><i class="ri-checkbox-circle-fill"></i></span>
                      <p class="m-0">Added to cart</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
        `;
    }
  });
}

export function updateBadge() {
  const cart = loadLocalStorage();
  const q = cart.reduce((sum, item) => (sum += item.quantity), 0);
  countBadge.forEach((badge) => (badge.innerHTML = q));
}

export function fireToast(icon, title) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: icon,
    title: title,
  });
}