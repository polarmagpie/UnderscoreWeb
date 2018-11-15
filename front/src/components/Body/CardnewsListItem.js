import React, {Component} from 'react';
import {Loader, Image, Grid} from 'semantic-ui-react';
import transparent from '../../images/transparent.png';

class CardnewsListItem extends Component {
    shouldComponentUpdate(nextProps) {
        return this.props.result !== nextProps.result;
    }

    render() {
        return null;
    }
}

export default CardnewsListItem;