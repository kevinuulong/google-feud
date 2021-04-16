
export function suggestions(query) {
    return fetch(`https://api.codetabs.com/v1/proxy?quest=http://suggestqueries.google.com/complete/search?client=chrome&hl=en&q=${query}`)
    .then(response => response.json())
    .then(data => {
        let autocomplete = {};
        let i = 0;
        data[1].forEach(val => {
            if (val.includes(query))
                autocomplete[val] = data[4]["google:suggestrelevance"][i];
            i++;
        })
        return autocomplete;
    })
    .catch(error => console.log('error', error));
}