import React from 'react';
import {
    Container,
    Image,
    Header,
    Button,
    Icon,
    Label
} from 'semantic-ui-react';
import {useContext} from '../contexts/ContextProvider';

const Lecture = (props) => {
    //나중에 동기적으로 강연 파일 가져올 것.
    const lecture = {
        image: 'https://via.placeholder.com/500',
        title: '블라블라 누구의 강연',
        lecturer: '강연자 뫄뫄',
        date: 'Nov. 20. 2018. ~ Nov. 31. 2018.',
        description: '웅앵웅 초키포키웅앵웅 초키포키웅앵웅 초키포키웅앵웅 초키포키웅앵웅 초키포키웅앵웅 초키포키웅앵웅 초키포키웅앵웅 초키포키웅앵웅 초키포키 살려줘 살려줘 살려줘 살려줘 살려줘 살려줘 살려줘',
        tags: ['심리학', '사회학']
    }

    return (
        <Container textAlign='center'>
            <Image src={lecture.image} size='large' centered/>
            <br/>
            <Container text textAlign='left'>
            <p>{lecture.title}</p>
            <p>{lecture.lecturer}</p>
            <p>{lecture.date}</p>
            <p>{lecture.description}</p>
            {lecture.tags.map((e, index) =>{
                return <Label key={index}>
                    {e}
                </Label>
            })}
            </Container>
            <br/>
            <Container>
                <Button primary animated className='listbutton' onClick={() => {props.changePage('lecturelist', props.id, props.page)}}>
                    <Button.Content visible >목록으로</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow left'/>
                    </Button.Content>
                </Button>
            </Container>
        </Container>
    );
};

export default useContext(({state, actions}) => ({currentPage: state.currentPage, id: state.id, page: state.page, changePage: actions.changePage}))(Lecture);