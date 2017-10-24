import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import 'zent/css/index.css'
import './index.css'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
