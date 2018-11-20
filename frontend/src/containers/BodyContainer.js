import React from 'react';
import {useContext} from '../contexts/ContextProvider';
import './BodyContainer.css';
import Contact from '../components/Contact';
import About from '../components/About';
import Subscribe from '../components/Subscribe';
import CardnewsList from './Cardnewslist';
import Cardnews from './Cardnews';
import LectureList from './Lecturelist';
import Lecture from './Lecture';
import NewsletterList from './Newsletterlist';
import Newsletter from './Newsletter';
import Main from './Main';

const BodyContainer = (props) => {
    console.log(props.currentPage); //디버깅용
    switch (props.currentPage) {
            //대하여
        case 'about':
            return <div className='body'>
                <About/>
            </div>;
            //카드뉴스 단일
        case 'cardnews':
            return <div className='body'>
                <Cardnews />
            </div>;

            //카드뉴스 리스트
        case 'cardnewslist':
            return <div className="body">
                <CardnewsList />
            </div>

            //컨택트
        case 'contact':
            return <div className='body'>
                <Contact/>
            </div>

            //강연 단일
        case 'lecture':
            return <div className='body'>
                <Lecture />
            </div>;

            //강연 리스트
        case 'lecturelist':
            return <div className='body'>
                <LectureList />
            </div>

            //메인
        case 'main':
            return <div className='body'>
                <Main />
            </div>;

            //뉴스레터 단일
        case 'newsletter':
            return <div className='newsletter'>
                <Newsletter />
            </div>;

            //뉴스레터 리스트
        case 'newsletterlist':
            return <div className='body'>
                <NewsletterList />
            </div>;

            //개인정보처리방침
        case 'privacy':
            return null;

            //구독
        case 'subscribe':
            return <div className='body'>
            <Subscribe/>
        </div>;

        default:
            return null;
    }
};

export default useContext(({state, actions}) => ({currentPage: state.currentPage, id: state.id}))(BodyContainer);