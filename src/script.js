import {displayHomeMovies, displayTrendingMovies} from './movies.js';

function fetchData() {
    fetch('./src/data.json')
        .then(res => res.json())
        .then(data => {
            displayTrendingMovies(data);
            displayHomeMovies(data);
        })
        .catch(err => console.log(err));
}


// router
window.addEventListener('load', () => {
    const router = new Navigo("/");

    router.on("/movies", function (match) {
        const app = document.getElementById('app');
        app.innerHTML = `
            test
        `
    });
})

fetchData();