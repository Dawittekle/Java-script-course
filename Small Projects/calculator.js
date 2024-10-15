const inputElement = document.querySelector('.input');

function addDisplay(values){
    inputElement.value+=values;
}

function clearInput(){
    inputElement.value='';
}

function calculate(){
    inputElement.value=eval(inputElement.value);
}
function clearLast(){
    inputElement.value= inputElement.value.slice(0,-1);
}