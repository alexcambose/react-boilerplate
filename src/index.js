import ReactDOM from 'react-dom';

const div = document.createElement('div');
div.id = 'app';
document.body.appendChild(div);

ReactDOM.render(<h1>dd</h1>, document.getElementById('app'));