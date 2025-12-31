export function loadLocalStorage(){
    const cart = JSON.parse(localStorage.getItem('cart'));
    if(!cart){
        return [];
    } else {
        return cart;
    }
}

export function saveLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}