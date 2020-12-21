const MOVIES_BACKEND_URL = "http://localhost:3000/movies";
const FAV_MOVIES_BACKEND_URL = "http://localhost:3000/favourites";
let moviesList = [];
let favMoviesList = [];
let errorMessage;
let loadFavourites = false;
/*
   This function should call getMoviesFromBackend() 
   and store that in an the global array 
*/

async function getMovies(favs) {
    if (favs) { // this is a favourites page
        let url = 'http://localhost:3000/favourites/';
        let res = await fetch(url);
        favMoviesList = await res.json();
        favMovieIds = favMoviesList.map(movie => movie.id);
        url = 'http://localhost:3000/movies?id=' + favMovieIds.join('&id=');
        res = await fetch(url);
        moviesList = await res.json();
        loadFavourites = true;
    }
    getMoviesFromBackend();
}

/*
   This function should fetch the movies from backend using Fetch API
   if any error occured, this function should handle using Promise.reject()
*/

async function getMoviesFromBackend(query) {
    if (!loadFavourites) {
        try {
            let url = 'http://localhost:3000/movies' + (query ? ('?q=' + query) : '');
            let res = await fetch(url);
            moviesList = await res.json();
        } catch (error) {
            console.log(error);
            $('#errorMessage').text("Couldn't load JSON!");
        }
    }
    displayMoviesToHtml(moviesList);
}

/*
   This function should display the given movies list on to the html page in the following element
   <section class="movies-container" id="moviesContainer">

*/

async function displayMoviesToHtml(moviesList) {

    let movies = '';
    let url = 'http://localhost:3000/favourites/';
    let res = await fetch(url);
    favMoviesList = await res.json();
    favMovieIds = favMoviesList.map(movie => movie.id);

    $.each(moviesList, function(i, movie) {

        movies += '<div class="card movie_card" id=' + movie.id + '>' +
            '<img src="' + movie.posterImageUrl + '" class="card-img-top" alt="' + movie.title + '">' +
            '<div class="card-body">' +
            '<i class="fa fa-heart fav_button' + (favMovieIds.includes('' + movie.id) ? ' favourite' : '') + '" data-toggle="tooltip" data-placement="bottom" title="Favourite"></i>' +
            '<h5 class="card-title">' + movie.title + '</h5>' +
            '<p class="card-text">' + movie.description + '</p>' +
            '<span class="movie_info"><i class="fa fa-user"></i> ' + movie.director + '</span>' +
            '<span class="movie_info float-right"><i class="fa fa-star"></i> ' + movie.rating + '</span></div> </div>';

    });

    $('#moviesList').html(movies);
    $('[data-toggle="tooltip"]').tooltip()
    $('.fav_button').on('click', async function() {
        fav_button = $(this);
        let id = fav_button.parent().parent().attr('id');
        if (fav_button.hasClass('favourite')) {
            $.ajax({
                url: url + id,
                type: 'DELETE',
                success: function(result) {
                    console.log('Removed movie ' + id + ' from favourites.\n', result);
                }
            });
        } else {
            $.post(url, { id: id }, function(data) {
                console.log(data);
            });
        }
        fav_button.toggleClass('favourite');
    });
}

$('#search').click(function() {
    let query = $('#query').val();
    getMoviesFromBackend(query);
});