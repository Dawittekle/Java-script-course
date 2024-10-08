let myArray = [];

function rendername(){
    let nameHTML = '';

    for(let i = 0; i < myArray.length; i++){
        let name = myArray[i].name;
        let dueDate = myArray[i].date;
        let html = `
        <div>${name} </div><div> ${dueDate}</div> <button onclick="
        myArray.splice(${i},1);
        rendername();
        " class="delete">Delete</button> `;
        nameHTML += html;
    }

    document.querySelector('.display').innerHTML = nameHTML;
}

function todo(){
    let name = document.querySelector('.todo-input');
    let date = document.querySelector('.input-date');


        myArray.push({
            name: name.value,
            date: date.value
        });
        
        // Clear the input fields
        name.value = '';
        date.value = '';
        
        // Re-render the list
        rendername();
   
}
