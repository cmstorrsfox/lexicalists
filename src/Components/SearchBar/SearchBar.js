import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {term: ''}

        this.search = this.search.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    search() {
        this.props.onSearch(this.state.term);
    }

    handleChange(event) {
        this.setState({ term: event.target.value })
    }

    handleSubmit(event) {
        alert(`an enquiry was submitted: ${this.state.term}`);
        event.preventDefault();
    }

    render() {
        return (
            <div className="search">
                <form   onSubmit={this.handleSubmit}
                        className="search-bar">
                    <input  onChange={this.handleChange} 
                            className="search-field"
                            type="text" 
                            placeholder="Enter your search term here">
                    </input>
                    <button onClick={this.search}
                            className="searchButton">Search</button>
                </form>
            </div>
        )
    }
};

export default SearchBar