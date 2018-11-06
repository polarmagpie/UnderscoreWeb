import React, {Component} from 'react';
import {Sidebar} from 'semantic-ui-react'
import Head from './Head';
import Body from './Body';
import Foot from './Foot';
import Side from './Side';

class App extends Component {
    state = {
        currentPage: 'main',
        isSidebarVisible: false
    }

    //특정 이벤트 시 현재 보고 있는 페이지 전환
    handleChangePage = (page) => {
        this.setState({currentPage: page});
    }

    //사이드바 버튼 클릭 시 토글
    handleToggleSidebar = () => {
        this.setState({
            isSidebarVisible: !this.state.isSidebarVisible
        });
    }

    //사이드바 강제 닫기
    hideSidebar = () => {
        if (this.state.isSidebarVisible) {
            this.setState({isSidebarVisible: false})
        }
    }

    render() {
        return (
            <Sidebar.Pushable>
                <Side
                    hideSidebar={this.hideSidebar}
                    handleChangePage=
                    {(e) => this.handleChangePage(e)}
                    isVisible={this.state.isSidebarVisible}/>
                <Sidebar.Pusher dimmed={this.state.isSidebarVisible} onClick={this.hideSidebar}>
                    <div className="App">
                        <Head onClick={this.handleToggleSidebar}/>
                        <Body currentPage={this.state.currentPage}/>
                        <Foot/>
                    </div>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        );
    }
}

export default App;
