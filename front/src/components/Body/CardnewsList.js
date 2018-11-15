import React, {Component} from 'react';
import {Grid, Segment, Image, Icon, Loader} from 'semantic-ui-react';
import _ from 'lodash';
import Page from './Page';
import axios from 'axios';
import CardnewsListItem from './CardnewsListItem';

class CardnewsList extends Component {
    state = {
        loaded: false,
        cards: [],
        url: [],
        totalCardnews: this.props.totalCardnews
    }

    render() {
        if (this.state.loaded){
            return (<Page current={this.props.page} totalPage = {this.props.totalPage}/>);
        }else {
            return (<Page />);
        }
    }
}

export default CardnewsList;