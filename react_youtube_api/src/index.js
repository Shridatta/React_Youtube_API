import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyA-FRKIH2X4ByUdvLMch6dTqcpe-OjmvB0';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
