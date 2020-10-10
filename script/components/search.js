import {showsCall} from "./showCall.js";

export function searchShows(json) {
    const search = document.querySelector(".search")
    
    search.onkeyup = function (event) {
        console.log(event);

        const showValue = event.target.value.trim().toLowerCase();

        const filteredShows = json.filter(function (filterShows) {
            if (filterShows.name.toLowerCase().startsWith(showValue)) {
                return true;
            }
        });

        showsCall(filteredShows);
    };
}