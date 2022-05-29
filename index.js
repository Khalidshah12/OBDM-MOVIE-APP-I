var imagesArray = [
    "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/04/movies-like-jack-reacher.jpg?q=50&fit=contain&w=1500&h=750&dpr=1.5",
    "https://www.rajdhanidelhi.com/media/posts/box-office-pushpa-hindi-is-the-bonus-hit-of-2021-001.jpg",
    "https://i0.wp.com/3.bp.blogspot.com/-SeYr4QJOtwk/Tb7VN1XQqbI/AAAAAAAACZc/-f9SzspU6qg/s1600/veera-wallpapers-posters-raviteja-kajal-tapsee-wallpapers-002.jpeg",
    "https://static.toiimg.com/photo/msid-86293975/86293975.jpg?48564",
    "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/06/f9.jpg?q=50&fit=contain&w=1500&h=750&dpr=1.5",
    "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2016/04/18/24-Movie-Stills-8.jpg?fit=1400%2C700&quality=80&zoom=1&ssl=1",
    "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/09/extraction-2.jpg?q=50&fit=contain&w=1500&h=750&dpr=1.5",
    "https://i0.wp.com/liftoff.network/wp-content/uploads/2018/06/Star-Wars-Adaptation.jpg?fit=1500%2C700&ssl=1",
    "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F255911859%2F73959077741%2F1%2Foriginal.20220328-182724?w=1000&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C375%2C1500%2C750&s=e8fa4e0c0ae3383699434c11653090a8",
]

// Slide Show Start
let i = 0;
var id;
const slideshow = document.querySelector('#slideshow');
id = setInterval(function () {

    if (i == imagesArray.length) {
        i = 0
    }
    else {
        slideshow.innerHTML = ""
        let image = imagesArray[i]
        // console.log(i)
        const img = document.createElement('img');
        img.setAttribute("class", "slideShowImages")
        img.src = image
        slideshow.append(img)
        i++
    }

}, 2000)
// Slide Show End


// Search function and API 

let key = "2c6bb4d"

const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');

function searchFun() {
    let url = `https://www.omdbapi.com/?s=${searchInput.value}&apikey=${key}`

    fetch(url).then(function (res) {
        return res.json()
    }).then(function (res) {
        // console.log(res.Search)
        display(res.Search)
    }).catch(function (err) {
        console.log(err)
    })

}

// display data function 
function display(data) {

    const movieList = document.querySelector('#movieList');
    movieList.innerHTML = ""

    if (data != undefined) {
        const body = document.querySelector('body');

        const h2 = document.querySelector('#yourResult');
        h2.innerText = `Your Search Results: (${data.length})`

        const movieList = document.querySelector('#movieList');
        // movieList.innerHTML = ""

        const slideshow = document.querySelector('#slideshow');
        slideshow.style.display = "none"
        const error = document.querySelector('#error');
        error.style.display = "none"

        data.forEach(function (elem) {

            const movieDiv = document.createElement('div');
            movieDiv.setAttribute("id", "movieDiv")
            movieList.append(movieDiv)

            const posterImage = document.createElement('img');
            posterImage.src = elem.Poster

            const title = document.createElement('h4');
            title.setAttribute("id", "title")
            title.innerText = "Title: " + elem.Title

            const year = document.createElement('p');
            year.setAttribute("id", "year")
            year.innerText = "Year of release: " + elem.Year

            const imdbID = document.createElement('p');
            imdbID.setAttribute("id", "imdbID")
            imdbID.innerText = "Imdb ID: " + elem.imdbID

            movieDiv.append(posterImage, title, year, imdbID)
        })
    }
}