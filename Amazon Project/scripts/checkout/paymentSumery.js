import {cart} from "../../data/cart.js"
import { getProduct} from "../../data/products.js"
import { deliveryOption, getDeliveryOption } from "../../data/deliveryOption.js";
import { formatCurrency } from "../utils/money.js";

export function renderPaymentSummery(){

    let priceProductCents = 0;
    let shippingPriceCents =0;

    cart.forEach((cartItem)=>{

        const product = getProduct(cartItem.productID);
        priceProductCents +=(product.priceCents * cartItem.quantity) ;
        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionID);
        shippingPriceCents+=deliveryOption.pricecents;

    });

    const totalBeforeTaxCents= priceProductCents +shippingPriceCents;
    const taxcents = totalBeforeTaxCents*0.1;
    const totalCents = totalBeforeTaxCents +taxcents;



    const summeryPaymentHTML = `
    <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">${formatCurrency(priceProductCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(shippingPriceCents)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalBeforeTaxCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(taxcents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
          </div>

          <button class="place-order-button button-primary js-pace-order">
            Place your order
          </button>`;

         document.querySelector('js-place-order').addEventListener('click', async()=>{
            const response = await fetch('https://supersimplebackend.dev/orders',{
              method : 'POST',
              headers : {
                'Content-Type' : 'application/json'
              },
              body :JSON.stringify( {
                cart : cart
              }),
            })

            const order = await response.json();
            console.log(order);
          })

          

          

          document.querySelector('.js-payment-summery')
           .innerHTML = summeryPaymentHTML;

}