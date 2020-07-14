import React from 'react';
import './Word.css';

class Word extends React.Component {
    render() {
        return(
            <div className ="Word">
                <ul>
                    {
                        this.props.queryParams === 'rel_jjb=' ? <li>{this.props.word} {this.props.term}</li> : <li>{this.props.term} {this.props.word}</li>
                    }
                </ul>
            </div>
        )
    }
}

export default Word;