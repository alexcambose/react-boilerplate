import React, { Component } from 'react';
import { Toggle } from 'material-ui';
const a = {fontFamily: 'Roboto', fontWeight: '200'};
class App extends Component {
    render() {
        return (
            <div>
               <Toggle
            name="disableYearSelection"
            value="disableYearSelection"
            label="Difdfdsable Year Selection"
          />
            </div>
        );
    }
}

export default App;