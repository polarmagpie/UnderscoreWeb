import React, {Component, createContext} from 'react';
import createUseConsumer from '../lib/createUseConsumer';

const Context = createContext();
const {Provider, Consumer: ContextConsumer} = Context;

class ContextProvider extends Component {
    state = {
        currentPage: 'main',
        id: 1,
        page: 1,
        isSidebarOpen: false
    }

    actions = {
        changePage: (currentPage, id = 1, page = 1) => {
            this.setState({currentPage, id, page});
            window.scroll(0, 0);
        },
        openSidebar: () => this.setState({isSidebarOpen: true}),
        closeSidebar: () => {
            this.setState({isSidebarOpen: false})
        }
    }

    render() {
        const {state, actions} = this;
        const value = {
            state,
            actions
        };

        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        );
    }
}

const useContext = createUseConsumer(ContextConsumer);

export {ContextProvider, useContext}