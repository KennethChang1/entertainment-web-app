export function displayHomeMovies(data) {
    const container = document.querySelector('.all-movies-wrapper');
    data.forEach(element => {
        if (element.isTrending) return true;
        const div = document.createElement('div');
        div.classList.add('movies');
        div.innerHTML = `
        <img class="movies-image" src="${element.thumbnail.regular.small}" alt="">
        <div class="movies-body">
          <div class="movie-info">
            <p>${element.year}</p> &middot;
            <p>${element.category}</p> &middot;
            <p>${element.rating}</p>
          </div>
          <p class="card__copy">${element.title}</p>
        </div>
        `
        container.appendChild(div);
    })
}

export function displayTrendingMovies(data) {
    const container = document.getElementById('trending');
    if(container == null) return;
    data.forEach(element => {
        if (element.isTrending) {
            const div = document.createElement('div');
            const {
                category
            } = element;
            const categories = category.toLowerCase().split(" ");
            div.classList.add('trending-movies');
            div.innerHTML = `
            <img class="trending-image" src="${element.thumbnail.trending.small}" alt="">
            <div class="movie-desc">
                <div>
                    <div class="movie-info">
                        <p class="trending-movie-copy">${element.year}</p> &middot;
                        <div>
                            <img src="assets/icon-category-${categories[0]}.svg" alt="">
                            <span class="trending-movie-copy">${element.category}</span>
                        </div>
                    </div>
                    <p class="movie-name">${element.title}</p>
                </div>
                <p class="trending-rating">${element.rating}</p>
            </div>
            `
            container.appendChild(div);
        }
    });
}