export const cart=[]
export function updateCartQuantity(){
    let cartQuantity=0;

       cart.forEach((item)=>{
        cartQuantity=cartQuantity+item.quantity;
       })
       
       document.querySelector('.js-cart-quantity').
        innerHTML=cartQuantity;
 }
