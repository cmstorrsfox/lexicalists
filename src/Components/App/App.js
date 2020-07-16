import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import '../../custom.scss';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';


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
      <Container fluid className="App">
        <Jumbotron fluid>
          <h1 className="title text-light bg-dark py-2">Welcome to the Collocation Station</h1>
          <p className="lead">Use this tool to look up simple noun or adjective collocations for common words.</p>
          <p className="font-italic">Note for Dom: This is just a placeholder name!</p>

        </Jumbotron>
        <SearchBar onSearch={this.search} />
        <SearchResults  searchResults={this.state.searchResults} 
                        queryParams={this.state.queryParams}
                        term={this.state.term}
        />
      </Container>
    );

  }

};

export default App;
