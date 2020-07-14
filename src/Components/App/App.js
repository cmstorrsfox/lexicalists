import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

// variables for DataMuse
const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
const accessURL = 'https://api.datamuse.com/words?';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      queryParams: '',
      searchResults: []
    }

    this.search = this.search.bind(this);
  }

    search(term, queryParams) {
      let endpoint = `${corsAnywhere}${accessURL}${queryParams}${term}`;
      console.log(endpoint);

      fetch(endpoint)
      .then(response => response.json()
      )
      .then(jsonResponse => this.setState({ 
        term: term,
        searchResults: jsonResponse,
        queryParams: queryParams 
      })
      )
    }

  render() {
    return (
      <div className="App">
        <SearchBar onSearch={this.search} />
        <SearchResults  searchResults={this.state.searchResults} 
                        queryParams={this.state.queryParams}
                        term={this.state.term}
        />
      </div>
    );

  }

};

export default App;
