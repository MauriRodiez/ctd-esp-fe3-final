
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom"
import App from './App';
import Context from './Contexts/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Context>
        <App/>
      </Context>
    </BrowserRouter>
);


