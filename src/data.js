import ghibli from "./data/ghibli/ghibli.js";

export const getData = () => {
  return ghibli.films;
};

//criteria can be "ASC" or "DESC"
export const sortByDate = (listToSort, criteria) => {
  let sortedFilms = [];
  if (criteria === "ASC") {
    sortedFilms = listToSort.sort((a, b) => {
      if (a.release_date < b.release_date) return -1;
      if (a.release_date > b.release_date) return 1;
      return 0;
    });
  } else {
    sortedFilms = listToSort.sort((a, b) => {
      if (a.release_date > b.release_date) return -1;
      if (a.release_date < b.release_date) return 1;
      return 0;
    });
  }
  return sortedFilms;
};

export const sortByScore = (listToSort, criteria) => {
  let sortedFilmsScore = [];
  if (criteria === "byScore") {
    sortedFilmsScore = listToSort.sort((a, b) => {
      if (Number(a.rt_score) > Number(b.rt_score)) return -1;
      if (Number(a.rt_score) < Number(b.rt_score)) return 1;
      return 0;
    });
  }
  return sortedFilmsScore;
};
export const filterDirector = (films, selectedDirector) => {
  const filteredFilms = [];
  for (let i = 0; i < films.length; i++) {
    const film = films[i];
    if (film.director === selectedDirector) {
      filteredFilms.push(film);
    }
  }
  return filteredFilms;
};


