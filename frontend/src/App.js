import React, {Component} from 'react';
import {ContextProvider} from './contexts/ContextProvider';
import WholeContainer from './containers/WholeContainer';

class App extends Component {
    render() {
        return (
            <ContextProvider>
                  <WholeContainer/>
            </ContextProvider>
        );
    }
}

export default App;
