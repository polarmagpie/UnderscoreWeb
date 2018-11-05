import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';

class Body extends Component {

    render() {
        const style = {
            marginTop: '2rem'
        }

        return (
            <div style={style}>
                <Container>
                    메인 페이지 내용입니다.
                </Container>
            </div>
        );
    }
}

export default Body;