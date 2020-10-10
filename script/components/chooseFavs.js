import {getExistingFavs} from "../utils/favfunctions.js";

export function chooseFavourites() {
    const favButtons = document.querySelectorAll(".favourite-button");
      
      favButtons.forEach((button) => {

          button.addEventListener("click", handleClick);
        });

        function handleClick() {
            this.classList.toggle("favourite-button");
            this.classList.toggle("favourite-button-active");

            const name = this.dataset.name;
            const description = this.dataset.description;
            const year = this.dataset.year;

            const currentFavs = getExistingFavs();

            const showExists = currentFavs.find(function(fav) {
                return fav.name === name;
            });

            if(!showExists) {
               const tvShow = { name, description, year}; 
               currentFavs.push(tvShow);
               saveFavs(currentFavs);
            } 
            else {
                const newFavs = currentFavs.filter((fav) => fav.name !== name);
                saveFavs(newFavs);
            }
        }

        function saveFavs(favs) {
            localStorage.setItem("favourites", JSON.stringify(favs));
        }



}
