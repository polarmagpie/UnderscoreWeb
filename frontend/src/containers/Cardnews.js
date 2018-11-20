import React from 'react';
import Slider from 'react-slick';
import {
    Container,
    Image,
    Header,
    Rating,
    Button,
    Icon
} from 'semantic-ui-react';
import './Cardnews.css';
import {useContext} from '../contexts/ContextProvider'

const Cardnews = (props) => {
    const setting = {
        infinite: false,
        adaptiveHeight: true,
        lazyLoad: 'progressive'
    }

    // 나중에 ajax로 이미지 받아올 것.
    const images = Array(10).fill('https://via.placeholder.com/900');

    return (
        <Container text textAlign='center'>
            <Slider {...setting}>
                {images.map((e, index) => {
                    return (
                        <div key={index}>
                            <Image src={e}/>
                        </div>
                    )
                })}
            </Slider>
            <Header as='h1' content='카드뉴스 제목'/>
            <Rating maxRating={5} size='massive'/>
            <br/>
            <Button primary animated className='listbutton' onClick={() => {props.changePage('cardnewslist', props.id, props.page)}}>
                <Button.Content visible >목록으로</Button.Content>
                <Button.Content hidden>
                    <Icon name='arrow left'/>
                </Button.Content>
            </Button>
        </Container>
    );
};

export default useContext(({state, actions}) => ({currentPage: state.currentPage, id: state.id, page: state.page, changePage: actions.changePage}))(Cardnews);