import React from 'react';
import './Word.css';

class Word extends React.Component {
    render() {
        return(
            <div className ="Word">
                <ul>
                    <li>{this.props.word}</li>
                </ul>
            </div>
        )
    }
}

export default Word;