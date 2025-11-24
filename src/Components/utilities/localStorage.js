export function getCart(){
    const storedCart = localStorage.getItem('cart');
    return storedCart? JSON.parse(storedCart) : [];
}
export function setCart(cart) {
    localStorage.setItem('cart',JSON.stringify(cart));
}
export function addToCart (product){
    const cart = getCart();
    const exists = cart.find(i => i.id === product.id)
    if(!exists){
        cart.push(product);
        setCart(cart)
    }
  return cart;
}