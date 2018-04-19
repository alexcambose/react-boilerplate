import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
import './assets/styles/index.scss';

const div = document.createElement('div');
div.id = 'app';
document.body.appendChild(div);


ReactDOM.render(
    <MuiThemeProvider>
        <App/>
    </MuiThemeProvider>
, document.getElementById('app'));