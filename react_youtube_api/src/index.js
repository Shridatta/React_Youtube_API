import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import SearchBar from './components/search_bar';




ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
