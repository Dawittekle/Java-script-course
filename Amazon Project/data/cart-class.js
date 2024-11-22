class Cart{
        cartItem =  undefined;

        #localStorageKey = undefined;

        constructor(localStorageKey){
            this.#localStorageKey=localStorageKey;
            this.#loadFromLocalStorage();
        }

        #loadFromLocalStorage(){
            this.cartItem=JSON.parse(localStorage.getItem(this.#localStorageKey)) || [{
                productID:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity:2,
                deliveryOptionID : '1'
            },{
                productID:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity:1,
                deliveryOptionID : '2'
            }];
        }

        saveToStorage(){
        localStorage.setItem(this.#localStorageKey,JSON.stringify(this.cartItem));
    }

    addToCart(productID) {
        let matchingItem;
        const querySelector = document.querySelector(`.js-quantity-selector-${productID}`);
        
        // Ensure `cartItem` is initialized
        if (!this.cartItem) this.loadFromLocalStorage();

        // Find if the product already exists in the cart
        this.cartItem.forEach((item) => {
            if (productID === item.productID) {
                matchingItem = item;
            }
        });

        // If the product exists, update the quantity
        if (matchingItem) {
            matchingItem.quantity += Number(querySelector ? querySelector.value : 1);
        } else {
            // Add a new product to the cart
            this.cartItem.push({
                productID: productID,
                quantity: Number(querySelector ? querySelector.value : 1),
                deliveryOptionID: '1'
            });
        }

        // Update the UI (if elements exist)
        setTimeout(() => {
            const addedElement = document.querySelector(`.js-added-to-cart-${productID}`);
            if (addedElement) addedElement.style.opacity = 1;
        }, 300);

        setTimeout(() => {
            const addedElement = document.querySelector(`.js-added-to-cart-${productID}`);
            if (addedElement) addedElement.style.opacity = 0;
        }, 800);

        this.saveToStorage();
    }

      deleteCart(productID){
        let newCart=[];
        this.cartItem.forEach((cartItem)=>{
            if(cartItem.productID!=productID){
                newCart.push(cartItem);
            }
        })
        cart.length = 0; // Clears the original cart array
        cart.push(...newCart);
        this.saveToStorage();
     }

      updateDeliveryOption(productID, deliveryOptionID){
        let matchingItem;
    
        this.cartItem.forEach((item)=>{
            if(productID===item.productID){
                matchingItem=item
            }
        })
    
        matchingItem.deliveryOptionID=deliveryOptionID;
        this.saveToStorage();
     }
    }


const cart = new Cart('class-oop'); 

console.log(cart);








 
 

 
