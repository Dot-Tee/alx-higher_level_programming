// When the user clicks on the div with ID add_item
$('#add_item').click(function() {
    // Create a new <li> element with text "Item"
    var newItem = $('<li>').text('Item');
    
    // Append the new <li> element to the list with class "my_list"
    $('ul.my_list').append(newItem);
});
