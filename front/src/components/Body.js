import React, {Component} from 'react';
import Main from './Body/Main';
import Lecture from './Body/Lecture';
import About from './Body/About';
import Contact from './Body/Contact';
import Cardnews from './Body/Cardnews';
import Subscribe from './Body/Subscribe';
import Newsletter from './Body/Newsletter';
import CardnewsList from './Body/CardnewsList';

class Body extends Component {
    state = {
        totalCardnews:4,
        totalLecture:4,
        totalNewsLetter:4,
        page: 1,
        totalPage: 5,
        id: -1
    }

    // 특정 리스트의 멤버를 클릭했을 때 해당 페이지를 기억하고 해당 ID 멤버로 이동.
    SeeId(id, page, section){
        this.setState({id, page});
        this.props.handleChangePage(section);
    }

    // 특정 리스트의 멤버에서 '목록' 버튼을 눌렀을 때 해당 리스트로 돌아감.
    BackPage(page, section){
        this.setState({page});
        this.props.handleChangePage(section);
        this.setState({page: 1})
    }

    switchPage() {
        const {totalCardnews, page, totalPage, id, totalLecture, totalNewsLetter} = this.state;

        switch (this.props.currentPage) {
            case 'main':
                return <Main/>;
            case 'lecture':
                return <Lecture/>;
            case 'about':
                return <About/>;
            case 'contact':
                return <Contact/>
            case 'cardnewslist':
                return <CardnewsList page = {page} totalCardnews={totalCardnews} SeePage = {this.SeeId}/>
            case 'cardnews':
                return <Cardnews id = {id} BackPage = {this.BackPage} />
            case 'subscribe':
                return <Subscribe/>
            case 'newsletter':
                return <Newsletter/>
            default:
                return <Main/>;
        }
    }

    render() {
        return (
            <div className='body'>
                {this.switchPage()}
            </div>
        );
    }
}

export default Body;