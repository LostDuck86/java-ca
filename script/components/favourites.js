import {getExistingFavs} from "../utils/favfunctions.js";

const favourites = getExistingFavs();

const container = document.querySelector(".home-container")

favourites.forEach((favourites) => {
    container.innerHTML += `<div class="container-card">
    <div class="card-content"> 
    <h2>${favourites.name}</h2>
    <p>${favourites.description}</p>
    <p>${favourites.year}</p>
    </div>
    </div>`;
})