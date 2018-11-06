import React from 'react';
import {Sidebar, Menu} from 'semantic-ui-react';

const Side = (props) => {
    const pageList = [
        {
            id: 0,
            target: 'lecture',
            name: '강연'
        }, {
            id: 1,
            target: 'cardnews',
            name: '카드뉴스'
        }, {
            id: 2,
            target: 'newsletter',
            name: '뉴스레터'
        }, {
            id: 3,
            target: 'subscribe',
            name: '구독'
        }, {
            id: 4,
            target: 'contact',
            name: 'CONTACT'
        }, {
            id: 5,
            target: 'about',
            name: 'ABOUT'
        }
    ].map((e) => {
        return (<Menu.Item as='a' key={e.id} onClick={() => handleChangePage(e.target)} content={e.name}></Menu.Item>)
    })

    const handleChangePage = (page) => {
        props.handleChangePage(page);
        props.hideSidebar();
    }

    return (
        <Sidebar
            as={Menu}
            animation='overlay'
            direction='left'
            inverted
            vertical
            visible={props.isVisible}
            size='tiny'>
            <Menu.Item as='h3' header>MENU</Menu.Item>
            {pageList}
        </Sidebar>
    );
};

export default Side;