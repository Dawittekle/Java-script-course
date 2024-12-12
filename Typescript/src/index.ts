let b :[number,string]=[5,'dawit'];
console.log(b[0]);

const enum size{small=1,medium,large};
let mysize : size = size.medium;
console.log(mysize);

function hello(sale:number, rate=100):number {
    if (sale<5000){
        return 200*5;
    }else{
        return rate*3;
    }
}
type Employee= {readonly id:number,name:string,retire:(date:Date)=>void};

let employee :Employee ={
    id:1,
    name:'dawit',
    retire: (date:Date)=>{
      console.log('hello'+(date) );  
    },}
type Length = 'inch'|'meter';//this called literal type

function greet(name:string | null):void{
    if(name){
         console.log('hello '+name+'!!');
    }else{
        console.log('holla');
    }
    
}

greet('dawit');

function hell0(name:string):null|string|undefined{
     let nameg= `hello how are you ${name}`;
     return nameg;
}

console.log(hell0?.('dawa'));



    




