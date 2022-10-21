//create a to do list that
//adds items to the list
//strikes out items on double click
//and deletes by clicking X

function newItem(){
    
    //add new list item
    const list = $('#list')
    const li = $('<li></li>');
    const inputValue = $('#input').val();

    if (inputValue === '') {
        alert('You must write something!');
    } else {
        list.append(li);
        li.append(inputValue);
    }
}