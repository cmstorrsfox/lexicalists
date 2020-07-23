import React from 'react';
//import './Word.css';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Alert from 'react-bootstrap/Alert'

class Word extends React.Component {
    constructor(props) {
        super(props);

        this.renderList = this.renderList.bind(this);
    }

    popover() {
        let definition = this.props.definition;
        let partOfSpeech = this.props.partOfSpeech;
        if (typeof definition === 'undefined') {
            return (
                <Popover>
                    <Popover.Content><Alert variant="danger">No definition!</Alert></Popover.Content>
                </Popover>
            )
        } else {
            return (
                <Popover>
                    <Popover.Title>{this.props.word} ({partOfSpeech.shift()})</Popover.Title>
                    <Popover.Content>{definition.shift()}</Popover.Content>
                </Popover>
            )
        }

        /*
        return (
            <Popover id="popover-basic">
                <Popover.Title as="h3">{this.props.word} ({this.props.partOfSpeech})</Popover.Title>
                <Popover.Content>{this.props.definition}</Popover.Content>
            </Popover>
        );
        */
    }

    renderList(queryParams) {
        switch(queryParams) {
            case 'rel_jjb=' : 
              return <ListGroup.Item action variant="primary" className="my-1">{this.props.word} {this.props.term}</ListGroup.Item>;
            case 'rel_jja=' : 
              return <ListGroup.Item action variant="primary" className="my-1">{this.props.term} {this.props.word}</ListGroup.Item>;
            case 'rel_syn=' :
              return <ListGroup.Item action variant="primary" className="my-1">{this.props.word}</ListGroup.Item>;
            default : return <ListGroup.Item action variant="primary" className="my-1">{this.props.word}</ListGroup.Item>;
        }
    };

    render() {
        return(
            <Container className ="Word">
                <OverlayTrigger trigger="focus" placement="top" overlay={this.popover()}>
                    <ListGroup>
                        {this.renderList(this.props.queryParams)}
                    </ListGroup>
                </OverlayTrigger>
            </Container>
        )
    }
}

export default Word;