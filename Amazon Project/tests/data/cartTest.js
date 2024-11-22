import { addToCart,cart,loadFromLocalStorage} from "../../data/cart.js";

describe('Test Suite : Add to cart',()=>{
    it('Adding the existing product to cart : ',()=>{
        
    });
    it('Adding a new product to cart : ',()=>{
        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([]);
        });
        loadFromLocalStorage();

        addToCart("54e0eccd-8f36-462b-b68a-8182611d9add");
        expect(cart.length).toEqual(1);
        });

})