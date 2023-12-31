// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
    const result = [];
    array.map(movie => {
        if (result.length === 0 || result.indexOf(movie.director) < 0) result.push(movie.director)
    })
    console.log("EXERCISE 1 ->", result);
    return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
    const result = array.filter(movie => movie.director === director);
    console.log("EXERCISE 2 ->", result);
    return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
    const dirMovies = getMoviesFromDirector(array, director);
    return dirMovies.reduce((res, film) => res + parseFloat(film.score), 0) / dirMovies.length
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
    return array.map(el => el.title).sort().slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
    return [...array].sort((a, b) => {
        if (a.year < b.year) return -1
        else if (a.year > b.year) return 1
        else {
            return a.title.localeCompare(b.title)
        }
    })
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
    const result = array.filter(movie => movie.genre.indexOf(category) >= 0 && !isNaN(parseFloat(movie.score)));
    return Math.round(
        (result.reduce((res, film) => res + parseFloat(film.score), 0)
            / result.length
        ) * 100) / 100
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
    function convertDurationToMinutes(duration) {
        const durationPattern = /((\d*)h)?\s?((\d*)min)?/;
        const matches = duration.match(durationPattern);

        if (!matches) {
            return
        }
        console.log(matches)
        const hours = parseInt(matches[2], 10) || 0;
        const minutes = parseInt(matches[4], 10) || 0;

        return hours * 60 + minutes;
    }

    return movies.map(movie => ({
        ...movie,
        duration: convertDurationToMinutes(movie.duration),
    }));
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(arr, year) {
    const retVal= arr.filter(movie => movie.year === year).sort((a, b) => a.score>b.score)
    return retVal.splice(1,retVal.length-2);
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = {
        getAllDirectors,
        getMoviesFromDirector,
        moviesAverageOfDirector,
        orderAlphabetically,
        orderByYear,
        moviesAverageByCategory,
        hoursToMinutes,
        bestFilmOfYear,
    };
}