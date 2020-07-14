import React from 'react';
import './SearchBar.css';


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
        alert(`an enquiry was submitted: ${this.state.term}`);
        event.preventDefault();
        this.setState({ term: '' })
        
    }


    render() {
        return (
            <div className="search">
                <form   onSubmit={this.handleSubmit}
                        className="search-bar">
                    <div className="input-field">
                        <input  value={this.state.term}
                                onChange={this.handleSearchChange} 
                                className="search-field"
                                type="text" 
                                placeholder="Enter your search term here">
                        </input>
                        <button onClick={this.search}
                                className="searchButton">Search
                        </button>
                    </div>
                </form>
                <form className="parameter-selector">
                    <select value={this.state.queryParams} onChange={this.handleParameterChange}>
                        <option value="" disabled>Select your search parameter here</option>
                        <option value="rel_jjb=">Adjective Collocations</option>
                        <option value="rel_jja=">Noun Collocations</option>
                    </select>
                </form>
            </div>
        )
    }
};

export default SearchBar