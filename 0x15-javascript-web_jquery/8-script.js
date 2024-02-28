// Fetch movie data from the URL
$.getJSON('https://swapi-api.alx-tools.com/api/films/?format=json', function(data) {
    // Extract movie titles from the fetched data
    var movies = data.results;
    
    // Iterate through each movie and add its title to the list
    $.each(movies, function(index, movie) {
        // Create a new <li> element with the movie title
        var listItem = $('<li>').text(movie.title);
        
        // Append the <li> element to the <ul> with ID "list_movies"
        $('#list_movies').append(listItem);
    });
});
