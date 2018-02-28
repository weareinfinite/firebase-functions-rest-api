import './styles/index.scss';
import React from 'react';
import { render } from 'react-dom';
import firebaseApp from './firebaseapp';
import App from './App';

render(<App/>, document.querySelector('#app'))
