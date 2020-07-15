import React from 'react';
//import './SearchResults.css';
import Word from '../Word/Word';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SearchResults extends React.Component {


    render() {
        return (
            <Container fluid className="results-container mt-3 bg-light border border-dark rounded-top">
                <Row xs={12} lg={12} className="bg-dark">
                    <h1 className="text-light mx-auto">Results for {this.props.term}</h1>
                </Row>
                <Row className="justify-content-center mt-3">
                    <Col xs={6} className="text-danger" id="column-results">
                        {
                            this.props.searchResults.map((item) => {
                                return <Word word={item.word} term={this.props.term} queryParams={this.props.queryParams} key={item.word} />
                            })
                        }                    
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default SearchResults;