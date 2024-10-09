/*

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

//about an array 
const array2=[2,23,95];
//array is reference , only have the poisition of the values stored
//const array1 =array2;
//the above declaration only make the positon where values store equal 
//to copy the values in array1 we use the method slice(); 
const array1 =array2.slice();
array2.push(2)
console.log(array1)
console.log(array2)
const [firstValue,secondValue]=[1,2];
console.log(firstValue);

 for(let i=0;i<10;i++){
    if(i===9){
        continue;//but we don't have to use add the incriment manually 
    }
    console.log(i);
 }

 let i=0;
 while(i<10){
    if(i%3===0){
        i++;  //in a while loop when we use continue we must add the incriment(i++)
        continue;//to avoid the infinite loop
    }
    console.log(i);
    i++;
 }

 const listName = ['search','book','class','degaga','class','class'];
 const listName2= ['mega','alpha','clever']

 function searchWord(array){
    for(let i=0;i<array.length;i++){
        if(array[i]==='search'){
            return i
        }
    }
    return -1;
 }
 console.log(searchWord(listName));
 console.log(searchWord(listName2));
 const finalValue=[]
 let count = 0;

 //to the first 2 'class' values of the array

 for(let i=0;i<listName.length;i++){
    if(listName[i]==='class'&& count<2){
        count++;
        continue;
    }
    finalValue.push(listName[i]);
 }
 console.log(finalValue);

 //remove the last 2 'class values
 listName.reverse();

 for(let i=0;i<listName.length;i++){
    if(listName[i]==='class'&& count<2){
        count++;
        continue;
    }
    finalValue.push(listName[i]);
 }
 finalValue.reverse();
 console.log(finalValue); */


 //Advanced function

 let greeting =function(){  //because function is the value
    console.log('hello every one');
 }
 greeting();

 const objectOne={
    num:2,
    fun:function(){
        console.log('I am having Fun!!!');
    }
 }
 objectOne.fun();

 function animal(param){  //using the function as parrameter
    param();
 }

 animal(function(){//this function is called callback 
    console.log('Animals are Dangerious');
 });

 setTimeout(function() {//it takes function and the time
    console.log("timeout")
 }, 3000);
 console.log('hello after that')

 /*setInterval(function(){  //this is also asychoronus
    console.log('hello this interval')
 },2000);*/

 let actions = [
    'wash dish',
    'close the door',
    'leave the house'
];

actions.forEach((value,index)=> {
    if(value==='wash dish'){
        return;//this is the same us using continue in regular loop
               //but to do the same thing as break we need to us the regular loop
    }
    console.log((index+1)+' : '+value);
});

function startFinish(){
    const start =document.querySelector('.example-button')
    start.innerHTML='Loading...'
    
    setTimeout(function(){
       start.innerHTML = 'finished!!';
        
    }, 1000);
}

function addCart(){
    let timeoutID;
    let isClicked =false;
    if(!isClicked){
       timeoutID= setTimeout(function(){
            display.innerHTML='';
        },2000)
        isClicked=true
    }else{
        clearTimeout(timeoutID);
    }
    const display= document.querySelector('.display');
    display.innerHTML='Added'; 
}

const function1 = ()=>{
    console.log('hello i am inside an arrow function')
}
function1();

const function2 = ()=> 2+3;
console.log(function2());
function classicMan(){
    console.log('nigga how are you')
}


const play = document.querySelector('.js-play-button');
play.addEventListener('click',function1)

const myArray=[2,3,78,89];

console.log(myArray.filter((value)=>{
   //return value>=50;//this is the same us the code bellow
   if(value>=50){
    return true;
   }else{
    return false;
   }

}))

console.log(myArray.map((value)=>{
    return value*10;
})) 

//exercises1

const multiply =(value1,value2)=> value1*value2;

console.log(multiply(6,9));

//exercise2

let count=0;

function countPosetiveNumber(array){

    array.forEach((value)=>{
        if(value>0){
            count++
        }
    })
    return count;
}
const myArray2 = [2,3,-6,-9,6,-8]

console.log(countPosetiveNumber(myArray2));

//exircise3

function addNum(arry,num){
  return  arry.map(value=> value+num);    
}
console.log(addNum(myArray2,100));

//exercise4
let count2 =0;
function removeEgg(arry){
    return arry.filter((value)=>{
       if(value!='egg' && count<2){
        count2++;
        return true;
       }  else {
        return false;
       }   
    }  
)
}
const myArray4 =['egg','lam','dog','egg','egg','potato','misr wet']



console.log(removeEgg(myArray4));
























 
