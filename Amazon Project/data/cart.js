export const cart=JSON.parse(localStorage.getItem('cart')) || [{
        productID:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity:2,
        deliveryOptionID : '1'
    },{
        productID:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity:1,
        deliveryOptionID : '2'
    }];


export function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productID){
    let matchingItem;
       let querySelector=document.querySelector(`.js-quantity-selector-${productID}`)

       cart.forEach((item)=>{
        if(productID===item.productID){
            matchingItem=item;
        }
       })
       
       if(matchingItem){
        matchingItem.quantity+=Number(querySelector.value)
       }else{
        cart.push({
            productID:productID,
            quantity:Number(querySelector.value)
        })
       }
       setTimeout(()=>{
        document.querySelector(`.js-added-to-cart-${productID}`).style.opacity=1;
        },300)

      setTimeout(()=>{
          document.querySelector(`.js-added-to-cart-${productID}`).style.opacity=0;
          },800)

       saveToStorage();

 }
 
 export function deleteCart(productID){
    let newCart=[];
    cart.forEach((cartItem)=>{
        if(cartItem.productID!=productID){
            newCart.push(cartItem);
        }
    })
    cart.length = 0; // Clears the original cart array
    cart.push(...newCart);
    saveToStorage();
 }
