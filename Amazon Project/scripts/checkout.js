import { renderPageSummery } from "./checkout/orderSummery.js";
import { renderPaymentSummery } from "./checkout/paymentSumery.js";
/*
import '../data/cart-oop.js';
import '../data/cart-class.js'
import '../data/backend-practice.js'*/

import { loadProducts, loadproductsfetch } from "../data/products.js";
import { loadcarts } from "../data/cart-class.js";



Promise.all([
    loadproductsfetch(),
    new Promise((resolve) => {
        loadcarts(() => {;
            resolve("Cart Loaded");
        });
    }),
]).then((value) => {
    console.log("Promise.all resolved with:", value);
    renderPageSummery();
    renderPaymentSummery();
}).catch((error) => {
    console.error("Promise.all encountered an error:", error);
});




 

/*
loadProducts(()=>{
    loadcarts(()=>{
        
    })
})*/


