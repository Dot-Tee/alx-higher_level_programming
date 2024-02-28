// Fetch character data from the URL
$.getJSON('https://swapi-api.alx-tools.com/api/people/5/?format=json', function(data) {
    // Extract character name from the fetched data
    var characterName = data.name;
    
    // Update the text content of the <div> with ID "character" to display the character name
    $('#character').text(characterName);
});
