import HeadMenu from '../components/HeadMenu';
import {useContext} from '../contexts/ContextProvider'


export default useContext(({actions}) => ({
    changePage: actions.changePage, // 로고 클릭 시 페이지 전환
    openSidebar: actions.openSidebar // 버튼 클릭 시 사이드바 온
}))(HeadMenu);