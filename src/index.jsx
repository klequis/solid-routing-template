/* @refresh reload */
import { render } from 'solid-js/web';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

const root = document.getElementById('root');

render(() => <App />, root);
