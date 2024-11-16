export const deliveryOption = [{
    ID : '1',
    deliveryDate : 7,
    pricecents : 0
},{
    ID : '2',
    deliveryDate : 3,
    pricecents : 499
},{
    ID : '3',
    deliveryDate : 1,
    pricecents : 999
}]

export function getDeliveryOption(deliveryOptionNow){
    let deliveryOptions;
    deliveryOption.forEach((option)=>{
        if(deliveryOptionNow===option.ID){
          deliveryOptions=option;
        }
      });
      return deliveryOptions || deliveryOption[0];
}