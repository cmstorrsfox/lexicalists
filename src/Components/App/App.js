import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
//import Datamuse from '../../util/Datamuse';

const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
const accessURL = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jjb=';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      searchResults: []
    }

    this.search = this.search.bind(this);
  }

    search(term) {
      let endpoint = `${corsAnywhere}${accessURL}${queryParams}${term}`;

      fetch(endpoint)
      .then(response => response.json()
      )
      .then(jsonResponse => this.setState({ searchResults: jsonResponse })
      )  
    }





  render() {
    return (
      <div className="App">
        <SearchBar onSearch={this.search} />
        <SearchResults  searchResults={this.state.searchResults}
                        term={this.state.term}
        />
      </div>
    );

  }

};

export default App;
