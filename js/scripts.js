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

    $(li).on('dblclick', crossOut);

    //delete button
    const crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);

    function deleteListItem() {
        li.addClass('delete');
    }

    //reorder the list
    $('#list').sortable();

}
