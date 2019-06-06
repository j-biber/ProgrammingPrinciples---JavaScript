'use strict';

(function festival() {

    function Genre(genreName) {
        this.name = genreName;
    }

    Genre.prototype.getData = function () {
        var name = this.name;
        var nameAbbr = name.charAt(0) + name.charAt(name.length - 1);
        return nameAbbr.toUpperCase();
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
    }

    Movie.prototype.getData = function () {
        return this.title + ', ' + this.length + ' min, ' + this.genre.getData();
    }

    function Program(date) {
        this.date = date;
        this.listOfMovies = [];
        //this.totalNumOfMovies = 0;
    }
    Program.prototype.getProgramDuration = function () {
        var programDuration = 0;
        this.listOfMovies.forEach(movie => programDuration += movie.length)
        return programDuration;
    }

    Program.prototype.addMovie = function (movie) {
        return listOfMovies.push(movie);
    }

    Program.prototype.getData = function () {
        var date = this.date;
        var movies = this.listOfMovies;
        var programDuration = this.getProgramDuration();
        var dateStr = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

        var outputStr = dateStr + ", program duration " + programDuration + "min\n";

        for (var i = 0; i < movies.length; i++) {
            var movie = movies[i];
            outputStr += "\t\t" + movie.getData() + "\n";
        }

        return outputStr;
    }

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
    }

    Festival.prototype.addProgram = function (program) {
        this.listOfPrograms.push(program);
    }

    Festival.prototype.getMoviesCount = function () {
        var programs = this.listOfPrograms;
        var moviesCount = 0;
    
        for (var i = 0; i < programs.length; i++) {
            var program = programs[i];
            moviesCount += program.listOfMovies.length;
        }
    
        return moviesCount;
    }

    Festival.prototype.getData = function () {
        var festivalName = this.name;
        var programs = this.listOfPrograms;
        var totalMovieCount = this.getMoviesCount();
    
        var output = festivalName + " has " + totalMovieCount + " movie titles\n"
    
        for (var i = 0; i < programs.length; i++) {
            var program = programs[i];
            output += "\t" + program.getData();
        }
    
        return output;
    }

    (function () {

        function createMovie(mTitle, mLength, genreName) {
            var genreObj = new Genre(genreName);
            // var movie = new Movie(movieTitle, new Genre(genreName), mLength);
            var movie = new Movie(mTitle, genreObj, mLength);
    
            return movie;
        }
    
        function createProgram(dateStr) {
            var date = new Date(dateStr);
            var program = new Program(date)
            return program;
        
        }
    })
       // Create movies
       var spiderman = createMovie("Spider-Man: Homecoming", 133, "Action");
       var planetApes = createMovie("War for the Planet of the Apes", 140, "Drama");
       var darkTower = createMovie("The Dark Towe", 95, "Western");
       var deadpool = createMovie("Deadpool", 108, "Comedy");
   
       // Create programs
       var actionProgram = createProgram("Oct 28 2017");
       var comedyProgram = createProgram("Oct 29 2017");
   
       // Add action movies to action program
       actionProgram.addMovie(spiderman);
       actionProgram.addMovie(planetApes);
       actionProgram.addMovie(darkTower);
   
       // Add comedy movies to comedy program
       comedyProgram.addMovie(deadpool);
   
       // Create festival
       var weekendFestival = new Festival("Weekend festival");
   
       // Add programs to the festival 
       weekendFestival.addProgram(actionProgram);
       weekendFestival.addProgram(comedyProgram);
   
       // Output festival data 
       console.log(weekendFestival.getData());
})();


/*Additional Tasks

When adding a movie to the movie list, make sure that there are no more than 4 movies of the same genre. Also, length of all movies in a list can not be longer than 8 hours.

Handle error when you enter text instead of a number for movie length. Try to stop program execution when this type of error happens.
 
Modify the festival so that it accepts maximum number of movies. Handle the error if text is inserted instead of a number for maximum number of movies. 

If there are no programs added to the festival, instead of program data display a message informing the user that the program is yet to be announced.

Weekend festival
     Program to be announced
     
*/