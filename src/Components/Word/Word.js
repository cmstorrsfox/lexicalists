import React from 'react';
import './Word.css';

class Word extends React.Component {
    constructor(props) {
        super(props);

        this.renderList = this.renderList.bind(this);
    }

    renderList(queryParams) {
        switch(queryParams) {
            case 'rel_jjb=' : 
              return <li>{this.props.word} {this.props.term}</li>;
            case 'rel_jja=' : 
              return <li>{this.props.term} {this.props.word}</li>;
            case 'rel_syn=' :
              return <li>{this.props.word}</li>;
            default : return <li>{this.props.word}</li>;
        }
    };

    render() {
        return(
            <div className ="Word">
                <ul>
                    {this.renderList(this.props.queryParams)}
                </ul>
            </div>
        )
    }
}

export default Word;