import {showsUrl} from "../data/api.js";
import {showsCall} from "./showCall.js";
import {searchShows} from "./search.js";
import {chooseFavourites} from "./chooseFavs.js";

export async function getShows() {
    try {
      const response = await fetch(showsUrl);
      const json = await response.json();
      console.log(json)

      
      showsCall(json);
      searchShows(json);
      chooseFavourites();

  }catch(error) {
      console.log(error);
  }  
  }

  