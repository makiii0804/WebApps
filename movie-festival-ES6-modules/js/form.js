import { Movie, Program } from "./entities.js";

const titleField = document.querySelector("#title");
const lengthField = document.querySelector("#length");
const genreOption = document.querySelector("#genre");
const movieBtn = document.querySelector("#create-movie");
const movieList = document.querySelector("#movie-list");

const dateField = document.querySelector("#date");
const programBtn = document.querySelector("#create-program");
const programList = document.querySelector("#program-list");

const festival = new Festival();

const createMovie = () => {
  const titleValue = titleField.value;
  const lengthValue = lengthField.value;
  const genreValue = genreOption.value;
  if (titleValue && lengthValue && genreValue) {
    const movie = new Movie(titleValue, lengthValue, genreValue);
    const movieListItem = document.createElement("li");
    movieListItem.textContent = movie.getData();
    movieList.appendChild(movieListItem);
    titleField.value = "";
    lengthField.value = "";
    genreOption.value = "";
  } else {alert("All fields are required");}
}

movieBtn.addEventListener("click", createMovie);

festival.addMovie(movie);
let ind = festival.listOfTotalMovies.length -1;


const createProgram = () => {
  const dateValue = new Date(dateField.value);
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  if (dateValue) {
    if (dateValue >= currentDate) {
      const program = new Program (dateValue);
      const programListItem = document.createElement("li");
      programListItem.textContent = program.getData();
      programList.appendChild(programListItem);
      dateField.value = "";
    } else {
      alert("Invalid date")
    }
  } else if (!dateValue) {
    {alert("Date is required!")}
  }
}

programBtn.addEventListener("click", createProgram);

