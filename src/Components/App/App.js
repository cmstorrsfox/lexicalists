import React from 'react';
import './App.css';
import Datamuse from '../../util/Datamuse';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import '../../custom.scss';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      queryParams: '',
      searchResults: [],
      hidden: true
    }

    this.search = this.search.bind(this);
  }

    search(term, queryParams) {
      Datamuse.search(term, queryParams)
      .then(jsonResponse => this.setState({ 
        term: term,
        queryParams: queryParams,
        searchResults: jsonResponse,
        hidden: false
      
      }))

    }

  render() {
    return (
      <Container fluid className="App">
        <Jumbotron fluid>
          <h1 className="title display-1 text-light bg-dark py-2">Welcome to the Collocation Station</h1>
          <p className="lead">Use this tool to search for a variety of different attributes of a word of your choice.</p>
        </Jumbotron>
        <SearchBar onSearch={this.search} />
        <SearchResults  hidden={this.state.hidden}
                        searchResults={this.state.searchResults} 
                        queryParams={this.state.queryParams}
                        term={this.state.term}
        />
      </Container>
    );

  }

};

export default App;
