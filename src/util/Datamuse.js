const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
const accessURL = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jjb=';


const Datamuse = {

    search(term) {
        //let term = 'pig';
        let endpoint = `${corsAnywhere}${accessURL}${queryParams}${term}`;

        fetch(endpoint)
        .then(response => response.json())
        .then(jsonResponse => console.log(jsonResponse.map(item => (
            item.word))))
    }
}

export default Datamuse;