let myArray = [];

function rendername(){
    let nameHTML = '';

    myArray.forEach(function(todoObject,index){
        const {name,date}=todoObject
        
        let html = `
        <div>${name} </div><div> ${date}</div> <button class="delete">Delete</button> `;
        nameHTML += html;

    })

    document.querySelector('.display').innerHTML = nameHTML;

    document.querySelectorAll('.delete')
     .forEach((value,index)=>{
        value.addEventListener('click',()=>{
            myArray.splice(index,1);
            //rendername();
        })

     })

    
}

const addButtonElement =document.querySelector('.add-button');
addButtonElement.addEventListener('click',()=>{
    todo();
})



function todo(){
    let name = document.querySelector('.todo-input');
    let date = document.querySelector('.input-date');

    if(name.value && date.value){
         myArray.push({
            name: name.value,
            date: date.value
        });
    }else {
        alert("please, fill both fields!!");
    }
       
        
        // Clear the input fields
        name.value = '';
        date.value = '';
        
        // Re-render the list
        rendername(); 
}
