// When the user clicks on the div with ID toggle_header
$('#toggle_header').click(function() {
    // Select the <header> element
    var header = $('header');
    
    // Check if the header has class 'red'
    if (header.hasClass('red')) {
        // If it has class 'red', remove it and add class 'green'
        header.removeClass('red').addClass('green');
    } else {
        // If it doesn't have class 'red', remove class 'green' and add class 'red'
        header.removeClass('green').addClass('red');
    }
});
