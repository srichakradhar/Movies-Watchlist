# My Favourite Movies Assignment

This objective of this assignment is to create a web page which displays movies with movie title, poster , description, directorname and the rating. The user can favourite the movie by clicking the favourite icon . The use can also search for a specific movie using the search option in the header. The user can see all his favourite movies by clicking on Favourite Movies link in the header

### Problem Statement

Create a web page using using Bootstrap with the below mentioned components
1. Navbar 
    This should contain the company logo ( logo.png is provided under images folder, use the same)
    Application Title ( My Favourite Movies )
    A Bootstrap form with a search box and a button

2. section with container class
3. card component for displaying each movie


### Expected Outcome
After the successful completion of this assignment, the participants can develop Developing `Single Page Applications using Async Programming `  and will get hands on the following topics

1. Fetch API with GET, POST, DELETE HTTP requests
2. Promise API ( usage of resolve, reject, then, catch functions)
3. Bootstrap and its components (NavBar, GridSystem,Form,Card)
4. json-server , http-server
5. Font-Awesome Icons


### Steps

1. Add some movies data in db.json ( sample movie object is provided in db.json)
2. After adding the movies, run the command `npm run dbserver`
3. Fetch the movies from db.json using fetch API at the API URL `http://localhost:3000/movies`
4. Display these movies in index.html using Bootstrap card component ( as shown in the image )
5. When the user clicks on the favourite icon , add the movie to the favouties using fetch API Post request to the API URL `http://localhost:3000/favourites`
6. If the movie is already favourited, if the user clicks on favourite icon, remove the movie from the favourites in db.json and update the UI
7. If user searches for a specific movie by entering the movie name and clicks on submit button, update the UI with the searched movies list




Design the page as per the image

### Home Page

![Image Not Found](/images/SampleOutputScreen.png)

### Search Results

![Image Not Found](/images/SearchOutputScreen.png)

### Favourite Results

![Image Not Found](/images/FavouriteMovies_Output_Screen.png)

### Instructions

1. Page must have title, favicon, description and meta tags
2. Must use Bootstrap framework and its components navbar, form, card, grid system
3. Use descriptive class names for HTML elements to apply the CSS
4. Use proper CSS3 selectors
5. Use proper indentation
6. Boilerplate contains the images, font-family, colors. Use them to get the exact output