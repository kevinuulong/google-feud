import { getSuggestions } from "./getSuggestions.js";

getSuggestions('scandinavian')
    .then(suggestions => {
        console.log(suggestions)
    })