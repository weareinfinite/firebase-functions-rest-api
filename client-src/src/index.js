import './styles/index.scss';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import firebaseApp from './firebaseapp';
import App from './App';

import store from './store';

render(<Provider store={ store }><App/></Provider>, document.querySelector('#app'))
