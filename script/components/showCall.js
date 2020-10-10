import { showsUrl } from "../data/api.js";
import {getExistingFavs} from "../utils/favfunctions.js";

const favourites = getExistingFavs();

export function showsCall(jsonData) {

    const container = document.querySelector(".home-container");

        container.innerHTML = "";

        for(let i = 0; i < jsonData.length; i++) {


            let cssClass = "favourite-button";

        const doesObjectExist = favourites.find(function (fav) {
            console.log(fav);

            return fav.name === jsonData[i].name;

        });
        console.log(doesObjectExist);

        if(doesObjectExist) {
            cssClass = "favourite-button-active";
        } 
            
            container.innerHTML += `<div class="container-card">
            <div class="card-content"> 
            <h2>${jsonData[i].name}</h2>
            <p>${jsonData[i].description}</p>
            <p>${jsonData[i].year}</p>
            </div>
            <div class="card-button"> 
            <button class="${cssClass}" 
            data-name="${jsonData[i].name}"
            data-description="${jsonData[i].description}"
            data-year="${jsonData[i].year}">Favourite</button>
            </div>
            </div>`;
        }

};


