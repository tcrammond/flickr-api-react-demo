import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/bulma/css/bulma.min.css';
import './index.css';

import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
