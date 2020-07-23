import React from 'react';
//import './SearchResults.css';
import Word from '../Word/Word';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);

        this.renderResults = this.renderResults.bind(this);
    }

    renderResults() {
        if (this.props.searchResults.length !== 0) {
            return (
                <Container fluid className="results-container mt-3 bg-light border border-dark rounded-top">
                    <Row xs={12} lg={12} className="bg-dark">
                        <h1 className="results-title display-2 text-light mx-auto">Results for {this.props.term}</h1>
                    </Row>
                    <Row className="justify-content-center mt-3">
                        <Col xs={12} className="text-primary" id="column-results">
                            {
                                this.props.searchResults.map((item) => {
                                    return <Word word={item.word} term={this.props.term} queryParams={this.props.queryParams} key={item.word} />
                                })
                            }                    
                        </Col>
                    </Row>
                </Container>
            )
        } else {
            return (
                <Container>
                    {
                        this.props.hidden === true ? null : <Alert variant="warning">This search returned no results. Try again.</Alert>
                    }
                </Container>
            )
        }

    };


    render() {
        return (
            <Container>
                {this.renderResults()}
            </Container>
        )
        
    }
};

export default SearchResults;