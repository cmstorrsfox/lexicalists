import React from 'react';
import './SearchResults.css';
import Word from '../Word/Word';

class SearchResults extends React.Component {
    render() {
        return (
            <div className="resultsContainer">
                <h1>Results</h1>
                <div className="term-before">
                    Term Before
                </div>
                <div className="results">
                    {
                        this.props.searchResults.map((item) => {
                            return <Word word={item.word} key={item.word} />
                        })
                    }                    
                </div>
                <div className="term-after">
                    Term After
                </div>
            </div>
        )
    }
};

export default SearchResults;