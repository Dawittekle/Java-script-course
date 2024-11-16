import { cart ,deleteCart,updateDeliveryOption} from "../../data/cart.js";
import { products,getProduct } from "../../data/products.js";
import {formatCurrency} from "../utils/money.js"
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { deliveryOption,getDeliveryOption } from "../../data/deliveryOption.js";
import { renderPaymentSummery } from "./paymentSumery.js";

export function renderPageSummery(){

    let cartSummeryHTML=``;

    cart.forEach((cartItem)=>{
        const productID=cartItem.productID;
        let matchingproduct =getProduct(productID);
        
    const deliveryOptionNow = cartItem.deliveryOptionID;
    let deliveryOptions = getDeliveryOption(deliveryOptionNow);

    const today = dayjs();
    const deliveryDate = today.add(deliveryOptions.deliveryDate,'days');
    const dateString = deliveryDate.format('dddd, MMMM D');

    cartSummeryHTML+= `<div class="cart-item-container js-cart-item-container-${matchingproduct.id}">
                <div class="delivery-date">
                  Delivery date: ${dateString}
                </div>

                <div class="cart-item-details-grid">
                  <img class="product-image"
                    src="${matchingproduct.image}">

                  <div class="cart-item-details">
                    <div class="product-name">
                      ${matchingproduct.name}
                    </div>
                    <div class="product-price">
                      $${formatCurrency(matchingproduct.priceCents)}
                    </div>
                    <div class="product-quantity">
                      <span>
                        Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                      </span>
                      <span class="update-quantity-link link-primary">
                        Update
                      </span>
                      <span class="delete-quantity-link link-primary js-delete-link" data-product-id =${matchingproduct.id}>
                        Delete
                      </span>
                    </div>
                  </div>

                  <div class="delivery-options">
                    <div class="delivery-options-title">
                      Choose a delivery option:
                    </div>
                    ${deliveryOptionHTML(matchingproduct,cartItem)}
                  </div>
                </div>
              </div>`;
    })


    function deliveryOptionHTML(matchingproduct,cartItem){
      let HTML = ``;
      deliveryOption.forEach((delivery)=>{
        const today = dayjs();
        const deliveryDate = today.add(delivery.deliveryDate,'days');
        const dateString = deliveryDate.format('dddd, MMMM D');

        const deliveryPrice = delivery.pricecents===0 ? 'FREE':`$${formatCurrency(delivery.pricecents)} -`;

        const ischecked = delivery.ID===cartItem.deliveryOptionID

      
      HTML+= `
        <div class="delivery-option js-delivery-option" data-product-id="${matchingproduct.id}" data-delivery-option-id="${delivery.ID}" >
              <input type="radio" ${ischecked ? 'checked' : ''}
                class="delivery-option-input"
                name="delivery-option-${matchingproduct.id}">
              <div>
                <div class="delivery-option-date">
                  ${dateString}
                </div>
                <div class="delivery-option-price">
                  ${deliveryPrice} Shipping
                </div>
              </div>
          </div>
        `

      })
      return HTML;
    }


    document.querySelector('.js-order-summery').
    innerHTML=cartSummeryHTML;

      document.querySelectorAll('.js-delete-link').forEach((link)=>{
        link.addEventListener('click',()=>{
            let productID=link.dataset.productId;
            deleteCart(productID);
            const deletedContainer= document.querySelector(`.js-cart-item-container-${productID}`)
            deletedContainer.remove();
            renderPaymentSummery();
            updateCartQuantity();
        })
      })

      function updateCartQuantity(){
        let cartQuantity = 0;
      
          cart.forEach((item)=>{
            cartQuantity=cartQuantity+item.quantity;
          })
          
          document.querySelector('.js-cart-quantity').
            innerHTML=`${cartQuantity} Items`;
      }
      updateCartQuantity();

    document.querySelectorAll('.js-delivery-option').forEach((element)=>{
      element.addEventListener('click',()=>{
        const {productId,deliveryOptionId} = element.dataset;
        updateDeliveryOption(productId,deliveryOptionId);
        renderPageSummery();
        renderPaymentSummery();   
      })
    })
}
