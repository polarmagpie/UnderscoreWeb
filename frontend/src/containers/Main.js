import React, {Component} from 'react';
import {Container, Header, Image, Item, Label, Divider} from 'semantic-ui-react';
import {useContext} from '../contexts/ContextProvider';
import './Main.css';

class Main extends Component {
    render() {
        const cardnews = Array(2).fill('https://via.placeholder.com/300');
        const newsletter = Array(2).fill({
            title: "뉴스레터 내용을 pdf로 올려놔서 여기 복사가 불가능함",
            writer: '작성자 누구',
            date: 'Nov. 20. 2018. ~ Nov. 31. 2018.',
            description: '짧게 요약해서 한 100자 안으로 볼 수 있게 써놓으면 될 듯 하다. 짧게 요약해서 100자. 짧게 요약해서 100자. 짧게 요약해서 100자.',
            tags: ['심리학', '사회학']
        })

        return (
            <Container text>
                <Divider horizontal>
                    <Header as='h2' content='최신 카드뉴스'/>
                </Divider>
                <Container textAlign='center'>    
                    <Image.Group size='medium'>
                        {cardnews.map((e, index) => {
                            return <Image src={e} key={index} centered bordered/>
                        })}
                    </Image.Group>
                </Container>
                <Divider horizontal>
                    <Header as='h2' content='최신 뉴스레터'/>
                </Divider>
                <Item.Group>
                    {newsletter.map((e, index) => {
                        return (
                            <Item
                                key={index}
                                as='a'
                                href='#'
                                onClick={() => {
                            }}>
                                <Item.Content>
                                    <Item.Header>{e.title}</Item.Header>
                                    <Item.Meta>
                                        <span>{e.writer}</span>
                                    </Item.Meta>
                                    <Item.Description>{e.description}</Item.Description>
                                    <Item.Extra>
                                        {e
                                            .tags
                                            .map((e, index) => {
                                                return (
                                                    <Label key={index}>
                                                        {e}
                                                    </Label>
                                                )
                                            })}
                                    </Item.Extra>
                                </Item.Content>
                            </Item>
                        )
                    })}
                </Item.Group>
            </Container>

        );
    }
}

export default useContext(({state, actions}) => ({currentPage: state.currentPage, page: state.page, changePage: actions.changePage}))(Main);