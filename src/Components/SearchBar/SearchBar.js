import React from 'react';
import './SearchBar.css';
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
        this.setState({ term: event.target.value.toLowerCase() })
    }

    //event handler for parameter field - provides parameter
    handleParameterChange(event) {
        this.setState({ queryParams: event.target.value })
    }

    handleSubmit(event) {
        if(this.state.queryParams === '') {
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
                <Form className="search-bar">
                    <Form.Group controlId="formSearchField" className="input-field">
                        <Form.Row xs={12} className="mt-3">
                            <Col xs={12} md={4} lg={3} className="my-auto d-flex justify-content-md-start justify-content-center">
                                <Form.Label className="step-label">Step 1: Enter your search term here:</Form.Label>
                            </Col>
                            <Col xs={12} md={8} lg={9} className="my-auto d-flex justify-content-md-start justify-content-center">
                                <Form.Control type="input" size="lg" value={this.state.term} onChange={this.handleSearchChange} className="search-field" />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group controlId="parameterSelector">
                        <Form.Row xs={12}>
                            <Col xs={12} md={4} lg={3} className="my-auto d-flex justify-content-md-start justify-content-center">
                                <Form.Label className="step-label">Step 2: Select your search criteria here:</Form.Label>
                            </Col>
                            <Col xs={12} md={8} lg={9} className="my-auto d-flex justify-content-md-start justify-content-center">
                                <ToggleButtonGroup type="radio" name="query" vertical className="mx-auto w-100">
                                    <ToggleButton value={'rel_jja='} onClick={this.handleParameterChange} variant="outline-primary" className="select-button rounded-top rounded-bottom m-1" size="sm">Nouns that are often modified by {this.state.term}</ToggleButton>
                                    <ToggleButton value={'rel_jjb='} onClick={this.handleParameterChange} variant="outline-primary" className="select-button rounded-top rounded-bottom m-1"size="sm">Adjectives that often modify {this.state.term}</ToggleButton>
                                    <ToggleButton value={'rel_syn='} onClick={this.handleParameterChange} variant="outline-primary" className="select-button rounded-top rounded-bottom m-1"size="sm">Common synonyms of {this.state.term}</ToggleButton>
                                    <ToggleButton value={'rel_trg='} onClick={this.handleParameterChange} variant="outline-primary" className="select-button rounded-top rounded-bottom m-1"size="sm">Words often associated with {this.state.term} in a text</ToggleButton>
                                    <ToggleButton value={'rel_hom='} onClick={this.handleParameterChange} variant="outline-primary" className="select-button rounded-top rounded-bottom m-1"size="sm">Homonyms of {this.state.term}</ToggleButton>
                                </ToggleButtonGroup>
                            </Col>
                        </Form.Row>
                    </Form.Group>
                </Form>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row xs={12}>
                        <Col xs={12} md={4} lg={3} className="my-auto d-flex justify-content-md-start justify-content-center">
                            <Form.Label className="step-label">Step 3: Click to search:</Form.Label>
                        </Col>
                        <Col xs={12} md={8} lg={9} className="my-auto d-flex justify-content-md-start justify-content-center">
                            <Button type="submit" size="md" block onClick={this.search} className="searchButton" variant="primary">Search</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Container>
        )
    }
};

export default SearchBar