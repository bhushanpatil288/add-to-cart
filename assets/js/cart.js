const countBadge = document.querySelectorAll(".countBadge");
const cartWrapper = document.querySelector(".cart-wrapper");
const total = document.querySelector(".total");
const subTotal = document.querySelector(".subTotal");

document.addEventListener('DOMContentLoaded', function(){
    updateBadge();
    renderCart();
    updateTotal();
    updateSubTotal();
})

function renderCart(){
    const cart = loadLocalStorage();
    cartWrapper.innerHTML = '';
    cart.forEach(item=>{
        cartWrapper.innerHTML+=`
             <div class="col-12 h-100">
                <div>

                    <div  class="shop-cart d-flex p-3 gap-4 align-items-center justify-content-between py-4 bg-white rounded-4 h-100 shadow">
                        <!-- left side -->
                        <div class="border bg-primary-subtle rounded-4 shadow w-25 overflow-hidden">
                            <img class="img-fluid" src="${item.path}" alt="${item.name}">
                        </div>

                        <!-- right side -->
                        <div class="d-flex flex-column justify-content-between align-items-center gap-4 w-100">

                            
                            <div class="d-flex justify-content-between w-100">
                                <h4>${item.name}</h4>
                                <button class="btn closeBtn shadow" onClick="removeItem(${item.id})"><i class="ri-close-line"></i></button>
                            </div>

                            <div class="w-100">
                                <p class="fw-bold">Vender - <span class="fw-normal">${item.vendor}</span></p>
                            </div>

                            <!-- quantity & price -->
                            <div class="d-flex justify-content-between w-100 align-items-center">
                                <div class="quantity-wrapper px-2 py-1 rounded-5 d-flex gap-3 align-items-center justify-content-center">
                                    <button onClick="decreaseQty(${item.id})" class="btn bg-white rounded-circle m-1 shadow increase"><i class="ri-subtract-line"></i></button>
                                    <span class="mt-2">${item.quantity}</span>
                                    <button onClick="increaseQty(${item.id})" class="btn bg-white rounded-circle shadow decrease"><i class="ri-add-line"></i></button>
                                </div>
                                <div>
                                    <p class="m-0 text-primary-custom fs-3 fw-bold">$${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        `
    })
}

function increaseQty(id){
    const cart = loadLocalStorage();
    const idx = cart.findIndex(item => item.id === id)
    cart[idx].quantity++;
    saveLocalStorage(cart);
    renderCart();
    updateBadge();
    updateTotal();
    updateSubTotal();
}

function decreaseQty(id){
    const cart = loadLocalStorage();
    const idx = cart.findIndex(item => item.id === id)
    if(cart[idx].quantity === 1){
        removeItem(id)
        return;
    }
    cart[idx].quantity--;
    saveLocalStorage(cart);
    renderCart();
    updateBadge();
    updateTotal();
    updateSubTotal();
}

function removeItem(id){
    const cart = loadLocalStorage();
    const idx = cart.findIndex(item=> item.id === id);
    cart.splice(idx, 1);
    saveLocalStorage(cart);
    renderCart();
    updateBadge();
    updateTotal();
    updateSubTotal();
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
  countBadge.forEach(badge => badge.innerHTML = q);
}

function clearCart(){
    const cart = loadLocalStorage();
    if(cart.length === 0){
        fireToast("error", "Cart is already emplty");
        return;
    }
    saveLocalStorage([]);
    renderCart();
    updateBadge();
    updateTotal();
    updateSubTotal();
    fireToast("warning", "Cart has been cleared")
}

function updateTotal(){
    const cart = loadLocalStorage();
    let sum = cart.reduce((sum, item) => sum+=item.quantity*item.price, 0);
    total.innerHTML = '$ ' + (sum).toFixed(2);
}

function updateSubTotal(){
    const cart = loadLocalStorage();
    let sum = cart.reduce((sum, item) => sum+=item.quantity*item.price, 0);
    subTotal.innerHTML = '$ ' + (sum).toFixed(2);
}

function fireToast(icon, title){
   const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: icon,
      title: title
    });
}