import React from 'react';
//import './SearchBar.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            queryParams: ''
        }

        this.search = this.search.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleParameterChange = this.handleParameterChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    search() {
        this.props.onSearch(this.state.term, this.state.queryParams);
    }
    
    //event handler for search field - provides term
    handleSearchChange(event) {
        this.setState({ term: event.target.value })
    }

    //event handler for parameter field - provides parameter
    handleParameterChange(event) {
        this.setState({ queryParams: event.target.value })
    }

    handleSubmit(event) {
        if(this.state.queryParams === '' ) {
            alert('Please select a search parameter then try your search again');
        } 

        event.preventDefault();
        this.setState({ 
            queryParams: ''
        
        })
    }
    


    render() {
        return (
            <Container className="search">
                <Form   onSubmit={this.handleSubmit} className="search-bar">
                    <Form.Group controlId="formSearchField" className="input-field">
                        <Form.Row className="m-3 justify-content-center">
                            <Col xs={12} lg={9} className="mt-2">
                                <Form.Control   type="input" size="lg" value={this.state.term} onChange={this.handleSearchChange} className="search-field" placeholder="Enter your search term here" />
                            </Col>
                            <Col xs={12} lg={3} className="mt-2">
                                <Button type="submit" size="lg" block onClick={this.search} className="searchButton" variant="primary">Search</Button>
                            </Col>
                        </Form.Row>
                    </Form.Group>
                </Form>
                <ToggleButtonGroup type="radio" name="query">
                    <ToggleButton value={'rel_jja='} onClick={this.handleParameterChange} variant="primary" className="border border-warning rounded-top rounded-bottom m-1" size="sm">Search for nouns that often go with {this.state.term}</ToggleButton>
                    <ToggleButton value={'rel_jjb='} onClick={this.handleParameterChange} variant="primary" className="border border-warning rounded-top rounded-bottom m-1"size="sm">Search for adjectives that often go with {this.state.term}</ToggleButton>
                </ToggleButtonGroup>
            </Container>
        )
    }
};

export default SearchBar