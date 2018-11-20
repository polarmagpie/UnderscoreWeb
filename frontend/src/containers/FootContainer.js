import Foot from '../components/Foot';
import {useContext} from '../contexts/ContextProvider';

export default useContext(({state, actions}) => ({
    changePage: actions.changePage
}))(Foot);