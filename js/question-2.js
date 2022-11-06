//Question 2:
const sitelink =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=b0377ffd518d4e62a7e6743bed6d5545";

const nameContainer = document.querySelector(".gameNames");

async function getName() {
  const getPage = await fetch(sitelink);

  const resultPage = await getPage.json();

  const gameNames = resultPage.results;

  nameContainer.innerHTML = "";

  for (let i = 0; i < gameNames.length; i++) {
    console.log(gameNames[i].name);

    if (i === 8) {
      break;
    }

    nameContainer.innerHTML += `<li class="gameNames">${gameNames[i].name}</li>`;
  }
}

getName();

const ratingContainer = document.querySelector(".gameRating");

async function getRating() {
  const getPage = await fetch(sitelink);

  const resultPage = await getPage.json();

  const gameRating = resultPage.results;

  ratingContainer.innerHTML = "";

  for (let i = 0; i < gameRating.length; i++) {
    console.log(gameRating[i].rating);

    if (i === 8) {
      break;
    }

    ratingContainer.innerHTML += `<li class="gameRating">${gameRating[i].rating}</li>`;
  }
}

getRating();

async function getTags() {
  const getPage = await fetch(sitelink);

  const resultPage = await getPage.json();

  console.log(resultPage.results);
}

getTags();

// how do i access the tags inside the names array? also, why do i get an empty item in the start of the list?
