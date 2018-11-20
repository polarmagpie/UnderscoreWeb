import React, {Component} from 'react';
import {useContext} from '../contexts/ContextProvider';
import {Container, Item, Header, Divider, Label} from 'semantic-ui-react';

class LectureList extends Component {
    state = {
        lecture: Array(4).fill({
            image: 'https://via.placeholder.com/300',
            title: '블라블라 누구의 강연',
            lecturer: '강연자 뫄뫄',
            date: 'Nov. 20. 2018. ~ Nov. 31. 2018.',
            description: '웅앵웅 초키포키웅앵웅 초키포키웅앵웅 초키포키웅앵웅 초키포키웅앵웅 초키포키웅앵웅 초키포키웅앵웅 초키포키웅앵웅 초키포키웅앵웅 초키포키',
            tags: ['심리학', '사회학']
        })
    }

    //ajax
    componentDidMount() {}

    render() {
        const {lecture} = this.state;
        const handleClick = (id, page) => {
            this.props.changePage('lecture', id, page)
        };

        return (
            <div>
                <Container text>
                <Divider horizontal>
                    <Header as='h1'>현재 진행 중인 강연</Header>
                </Divider>
                    <Item.Group>
                        {lecture.map((e, index) => {
                            return (
                                <Item key={index} as='a' href='#' onClick={() => {handleClick(0, 0)}}>
                                <Item.Image src={e.image} />
                                <Item.Content>
                                  <Item.Header>{e.title}</Item.Header>
                                  <Item.Meta>
                                    <span>{e.lecturer} / {e.date}</span>
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
                </Container>
            </div>
        );
    }
}

export default useContext(({state, actions}) => ({currentPage: state.currentPage, page: state.page, changePage: actions.changePage}))(LectureList);