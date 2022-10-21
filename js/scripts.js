//create a to do list that
//adds items to the list
//strikes out items on double click
//and deletes by clicking X
//and can be organized

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

    //cross item out by click
    function crossOut() {
        li.toggleClass('strike');
    }

    $(li).on('click', crossOut);

    //delete button
    const button = $('button');
    const deleteButton = $(button).addClass('.delete');

    button.append(li > crossOutButton);

    $(button).on('click', deleteButton);
}
