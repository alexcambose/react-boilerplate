import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/index.scss';

const div = document.createElement('div');
div.id = 'app';
document.body.appendChild(div);

ReactDOM.render(<App/>, document.getElementById('app'));