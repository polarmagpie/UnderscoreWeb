import React from 'react';
import {Sidebar, Menu} from 'semantic-ui-react';

const Side = (props) => {
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
        size='tiny'
        >
        <Menu.Item as='h3' header>MENU</Menu.Item>
        <Menu.Item as='a' onClick={() => handleChangePage('lecture')}>강연</Menu.Item>
        <Menu.Item as='a' onClick={() => handleChangePage('cardnews')}>카드뉴스</Menu.Item>
        <Menu.Item as='a' onClick={() => handleChangePage('newsletter')}>뉴스레터</Menu.Item>
        <Menu.Item as='a' onClick={() => handleChangePage('subscribe')}>구독</Menu.Item>
        <Menu.Item as='a' onClick={() => handleChangePage('contact')}>CONTACT</Menu.Item>
        <Menu.Item as='a' onClick={() => handleChangePage('about')}>ABOUT</Menu.Item>
        </Sidebar>
    );
};

export default Side;