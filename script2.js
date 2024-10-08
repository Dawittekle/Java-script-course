//this code is for three buttons
function toggle(button){
    
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(function(button){
        button.classList.remove('is-toggled');
    })
    button.classList.add('is-toggled');
}
//about an array

const myArray =[60,70,90];
console.log(myArray);
myArray[0]=45;
console.log(myArray);

//about the loop
const doubleArray= [];

for(let i=0;i<myArray.length;i++){
    doubleArray[i]=myArray[i]*2;
}

console.log(doubleArray)

