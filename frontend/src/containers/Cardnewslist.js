import React, {Component} from 'react';
import {useContext} from '../contexts/ContextProvider';
import {Container, Grid, Pagination, Header, Divider} from 'semantic-ui-react';
import Cardnewslistitem from '../components/Cardnewslistitem';
import './Cardnewslist.css';

class CardnewsList extends Component {
    state = {
        cardnews: Array(4).fill({
            name: '카드뉴스 이름 궁시렁궁시렁 궁시렁궁시렁궁시렁궁시렁',
            thumbnail: 'https://via.placeholder.com/300',
            date: 'Nov. 19.',
            description: "Mama, just killed a man. put a gun against his head, pulled my trigger now he's " +
                    "dead. Mama, life had just begun, but now I've gone and thrown it all away. Mama " +
                    "ooo"
        })
    }

    //ajax
    componentDidMount() {}

    render() {
        const {cardnews} = this.state;
        const handleClick = (id, page) => {
            this.props.changePage('cardnews', id, page)
        };

        return (
            <div>
                <Container textAlign='center' text>
                <Divider horizontal>
                    <Header as='h1'>카드뉴스</Header>
                </Divider>
                    <Grid stretched>
                        {cardnews.map((e, index) => {
                            return <Grid.Column key={index} mobile={16} tablet={8} computer={8}>
                                <Cardnewslistitem
                                    name={e.name}
                                    thumbnail={e.thumbnail}
                                    date={e.date}
                                    description={e.description}
                                    onClick={() => handleClick(0, 0)}
                                    />
                            </Grid.Column>
                        })}
                    </Grid>
                    <Pagination firstItem={null} lastItem={null} nextItem={null} prevItem={null} siblingRange={3} defaultActivePage={1} totalPages={10} />
                </Container>
            </div>
        );
    }
}

export default useContext(({state, actions}) => ({currentPage: state.currentPage, page: state.page, changePage: actions.changePage}))(CardnewsList);