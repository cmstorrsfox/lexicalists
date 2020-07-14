import React from 'react';
import './SearchResults.css';
import Word from '../Word/Word';

class SearchResults extends React.Component {
    render() {
        return (
            <div className="results-container">
                <h1>Results</h1>
                <div className="results-columns">
                    <div className="column" id="column-before">
                        Term Before
                    </div>
                    <div className="column" id="column-results">
                        {
                            this.props.searchResults.map((item) => {
                                return <Word word={item.word} key={item.word} />
                            })
                        }                    
                    </div>
                    <div className="column" id="column-after">
                        Term After
                    </div>
                </div>
            </div>
        )
    }
};

export default SearchResults;