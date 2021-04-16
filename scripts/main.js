import { suggestions } from "./getSuggestions.js";

suggestions('scandinavian')
    .then(suggested => {
        console.log(suggested)
    })