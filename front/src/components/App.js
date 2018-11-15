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
                    {this.handleChangePage}
                    isVisible={this.state.isSidebarVisible}/>
                <Sidebar.Pusher dimmed={this.state.isSidebarVisible} onClick={this.hideSidebar}>
                    <div className="app">
                        <Head onClick={this.handleToggleSidebar} handleChangePage={e => this.handleChangePage('main')}/>
                        <Body handleChangePage={this.handleChangePage} currentPage={this.state.currentPage}/>
                        <Foot handleChangePage={this.handleChangePage}/>
                    </div>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        );
    }
}

export default App;
