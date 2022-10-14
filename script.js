let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor( title, rating, havewatched) {
        this.title = title;
        this.rating = rating;
        this.havewatched = havewatched;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    console.log("A new movie is added")
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
let printMovies = () => {
    console.log("Printing all movies...");
    var count = 0;
    for (i in allMovies) {
        count++;
        movie = allMovies[i]
        console.log(movie.title + ", rating of " + movie.rating
                + ", havewatched: " + movie.havewatched);
    }
    console.log("\nYou have " + count + " movies in total");
}


//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
let highRatings = (rating) => {
    console.log("printing movie that has a rating higher than " + rating);
    var count = 0;
    for (i in allMovies) {
        if (allMovies[i].rating > rating) {
            count++;
            movie = allMovies[i]
            console.log(movie.title + " has a rating of " + movie.rating);
        }
    }
    console.log("\nIn total, there are " + count + " matches");
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    for (movie in allMovies) {
        if (movie.title == title) {
            movie.havewatched = !movie.havewatched;
        }
    }
    console.log("changing the status of the movie...");
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);