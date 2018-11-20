// One Container to contain them all, One Container to refer them, One Container
// to bring them all, and in the context bind them.

import React from 'react';
import HeadContainer from './HeadContainer'
import BodyContainer from './BodyContainer';
import FootContainer from './FootContainer';
import SideContainer from './SideContainer';
import {Sidebar} from 'semantic-ui-react';
import {useContext} from '../contexts/ContextProvider';
import './WholeContainer.css'

const WholeContainer = (props) => {
    return (
        <Sidebar.Pushable>
            <SideContainer/>
            <Sidebar.Pusher dimmed={props.isSidebarOpen} onClick={props.isSidebarOpen ? props.closeSidebar : null}>
                <div className="whole">
                    <HeadContainer/>
                    <BodyContainer/>
                    <FootContainer/>
                </div>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    );
};

export default useContext(({state, actions}) => (
    {
        isSidebarOpen: state.isSidebarOpen,
        closeSidebar: actions.closeSidebar
    }))(WholeContainer);