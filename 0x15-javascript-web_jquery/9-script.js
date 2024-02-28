// When the document is ready
$(document).ready(function() {
    // Make an AJAX request to fetch the translation
    $.ajax({
        url: 'https://hellosalut.stefanbohacek.dev/?lang=fr',
        method: 'GET',
        success: function(data) {
            // Update the content of the <div> with ID "hello" with the fetched translation
            $('#hello').text(data.hello);
        },
        error: function(xhr, status, error) {
            console.error('Error fetching translation:', error);
        }
    });
});
