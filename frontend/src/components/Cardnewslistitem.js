import React, { Component } from 'react';
import {Card, Image} from 'semantic-ui-react';

class Cardnewslistitem extends Component {
    shouldComponentUpdate(prev, next){
        return prev!==next;
    }

    render() {
        const {name, thumbnail, date, description, onClick} = this.props;

        return (
            <Card href='#' fluid onClick={onClick} color='violet'>
                <Image src={thumbnail} centered size='medium'/>
                <Card.Content>
                    <Card.Header>{name}</Card.Header>
                    <Card.Meta>{date}</Card.Meta>
                    <Card.Description>{description}</Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

export default Cardnewslistitem;