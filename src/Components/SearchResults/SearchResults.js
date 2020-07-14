import React from 'react';
import './SearchResults.css';
import Word from '../Word/Word';

class SearchResults extends React.Component {


    render() {
        return (
            <div className="results-container">
                <h1>Results for {this.props.term}</h1>
                    <div className="column" id="column-results">
                        {
                            this.props.searchResults.map((item) => {
                                return <Word word={item.word} term={this.props.term} queryParams={this.props.queryParams} key={item.word} />
                            })
                        }                    
                    </div>
            </div>
        )
    }
};

export default SearchResults;