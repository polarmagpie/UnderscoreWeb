import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import Main from './Body/Main';
import Lecture from './Body/Lecture';
import About from './Body/About';
import Contact from './Body/Contact';
import Cardnews from './Body/Cardnews';
import Subscribe from './Body/Subscribe';
import Newsletter from './Body/Newsletter';

class Body extends Component {
    //state에서 currentPage가 바뀌지 않을 때를 위한 최적화
    shouldComponentUpdate(nextProps) {
        return this.props.currentPage !== nextProps.currentPage;
    }

    switchPage() {
        switch (this.props.currentPage) {
            case 'main':
                return <Main/>;
            case 'lecture':
                return <Lecture/>;
            case 'about':
                return <About/>;
            case 'contact':
                return <Contact/>
            case 'cardnews':
                return <Cardnews/>
            case 'subscribe':
                return <Subscribe/>
            case 'newsletter':
                return <Newsletter/>
            default:
                return <Main/>;
        }
    }

    render(props) {
        const style = {
            marginTop: '2rem',
            flex: '1 1 auto',
            height: '60vh',
            textAlign: 'center'
        }

        return (
            <div style={style}>
                <Container>
                    {this.switchPage()}
                </Container>
            </div>
        );
    }
}

export default Body;