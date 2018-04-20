import React, { Component } from 'react';
import Counter from './components/Counter';
import RoutesContainer from './routes/RoutesContainer';

class App extends Component {
    render() {
        return (
            <div>
                <h3>It works!</h3>
                <RoutesContainer />
            </div>
        );
    }
}

export default App;
