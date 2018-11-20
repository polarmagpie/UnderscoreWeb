import React, {Component} from 'react';
import {useContext} from '../contexts/ContextProvider';
import {Container, Item, Header, Divider, Label, Pagination} from 'semantic-ui-react';

class NewsletterList extends Component {
    state = {
        newsletter: Array(4).fill({
            title: "뉴스레터 내용을 pdf로 올려놔서 여기 복사가 불가능함",
            writer: '작성자 누구',
            date: 'Nov. 20. 2018. ~ Nov. 31. 2018.',
            description: '짧게 요약해서 한 100자 안으로 볼 수 있게 써놓으면 될 듯 하다. 짧게 요약해서 100자. 짧게 요약해서 100자. 짧게 요약해서 100자.',
            tags: ['심리학', '사회학']
        })
    }

    //ajax
    componentDidMount() {}

    render() {
        const {newsletter} = this.state;
        const handleClick = (id, page) => {
            this.props.changePage('newsletter', id, page)
        };

        return (
            <div>
                <Container text>
                <Divider horizontal>
                    <Header as='h1'>뉴스레터</Header>
                </Divider>
                    <Item.Group>
                        {newsletter.map((e, index) => {
                            return (
                                <Item key={index} as='a' href='#' onClick={() => {handleClick(0, 0)}}>
                                <Item.Content>
                                  <Item.Header>{e.title}</Item.Header>
                                  <Item.Meta>
                                    <span>{e.writer}</span>
                                  </Item.Meta>
                                  <Item.Description>{e.description}</Item.Description>
                                  <Item.Extra>
                                    {e.tags.map((e, index) => {
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
                    <Container textAlign='center'>
                    <Pagination firstItem={null} lastItem={null} nextItem={null} prevItem={null} siblingRange={3} defaultActivePage={1} totalPages={10} />
                    </Container>
                </Container>
            </div>
        );
    }
}

export default useContext(({state, actions}) => ({currentPage: state.currentPage, page: state.page, changePage: actions.changePage}))(NewsletterList);