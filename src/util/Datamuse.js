const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
const accessURL = 'https://api.datamuse.com/words?';

const Datamuse = {
    search(term, queryParams) { 
        let endpoint = `${corsAnywhere}${accessURL}${queryParams}${term}`;
        console.log(endpoint);

        return fetch(endpoint)
        .then(response => response.json())

    }
}

export default Datamuse;

