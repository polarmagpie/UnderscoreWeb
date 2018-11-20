import React from 'react';
import {Sidebar, Menu, Icon} from 'semantic-ui-react';
import {useContext} from '../contexts/ContextProvider';

const Side = (props) => {
    const pageList = [
        {
            id: 0,
            target: 'lecturelist',
            name: '강연',
            icon: 'microphone'
        }, {
            id: 1,
            target: 'cardnewslist',
            name: '카드뉴스',
            icon: 'address card outline'
        }, {
            id: 2,
            target: 'newsletterlist',
            name: '뉴스레터',
            icon: 'edit outline'
        }, {
            id: 3,
            target: 'subscribe',
            name: '구독',
            icon: 'mail square'
        }, {
            id: 4,
            target: 'about',
            name: 'ABOUT',
            icon: 'question'
        }
    ].map((e) => {
        return (<Menu.Item as='a' key={e.id} onClick={() => handleChangePage(e.target)}>
        <Icon name={e.icon}/>
        {e.name}
        </Menu.Item>)
    })

    const handleChangePage = (page) => {
        props.changePage(page);
        props.closeSidebar();
    }

    return (
        <Sidebar
            as={Menu}
            animation='overlay'
            direction='left'
            inverted
            vertical
            visible={props.isSidebarOpen}
            icon='labeled'
            size='small'>
            <Menu.Item as='h3' header>MENU</Menu.Item>
            {pageList}
        </Sidebar>
    );
};

export default useContext(
    ({state, actions}) => ({
        isSidebarOpen: state.isSidebarOpen,
        changePage: actions.changePage,
        closeSidebar: actions.closeSidebar,
        openSidebar: actions.openSidebar
    })
)(Side);