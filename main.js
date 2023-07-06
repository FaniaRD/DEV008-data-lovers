import { getData, sortByDate, sortByScore, filterDirector} from "./data.js";


const films = getData();

const movieListNode = document.getElementById("movieList");
const displayMovies = (filmList) => {
  movieListNode.innerHTML = "";
  for (let i = 0; i < filmList.length; i++) {
    const movieCardNode = document.createElement("div");
    movieCardNode.classList.add("movieCard");
    const image = document.createElement("img");
    image.src = filmList[i].poster;
    const posterContainer = document.createElement("div");
    posterContainer.classList.add("posterContainer");
    const movieInfo = document.createElement("div");
    movieInfo.classList.add("movieInfo");
    const movieInfoHeader = document.createElement("div");
    movieInfoHeader.classList.add("movieInfoHeader");
    const title = document.createElement("h2");
    title.textContent = filmList[i].title;
    title.classList.add("title");

    const releaseDate = document.createElement("p");
    releaseDate.textContent = filmList[i].release_date;
    releaseDate.classList.add("releaseDate");

    const score = document.createElement("p");
    score.textContent = "Score: " + filmList[i].rt_score;
    score.classList.add("score");

    const director = document.createElement ("p");
    director.textContent = "Director: " + filmList[i].director;
    director.classList.add("director");
    
    const description = document.createElement("p");
    description.textContent = filmList[i].description;
    description.classList.add("description");
    movieInfo.appendChild(title);
    
    movieInfo.appendChild(movieInfoHeader);
    movieInfo.appendChild(director);
    
    movieInfo.appendChild(description);

    posterContainer.appendChild(image);
    movieCardNode.appendChild(posterContainer);
    
    movieInfoHeader.appendChild(releaseDate);
    movieInfoHeader.appendChild(score);

    movieListNode.appendChild(movieCardNode);
    movieCardNode.appendChild(movieInfo);
  }
};
displayMovies(films);

document.getElementById("orderBy").addEventListener("change", (event) => {
  const sortBy = event.target.value;
  if (sortBy === "byDateDes") {
    const sortedFilmsByDateDesc = sortByDate(films, "DESC");
    displayMovies(sortedFilmsByDateDesc);
  } else if (sortBy === "byDateAs") {
    const sortedFilmsByDateAsc = sortByDate(films, "ASC");
    displayMovies(sortedFilmsByDateAsc);
  } else if (sortBy === "byScore") {
    const sortedFilmsByScore = sortByScore(films, "byScore");
    displayMovies(sortedFilmsByScore);
  }
});

document
  .getElementById("filterDirector")
  .addEventListener("change", (event) => {
    const selectedDirector = event.target.value;


    if (selectedDirector === "All") {
      displayMovies(films);
      return;
    }
    // const filteredFilms = films.filter((film, i)=>{
    //     return film.director === selectedDirector
    // })
    else {
      const filteredFilmsByDirector = filterDirector(films, selectedDirector);
      displayMovies(filteredFilmsByDirector);
    }
  });