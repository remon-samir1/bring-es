import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/less';
import 'swiper/less/navigation';
import 'swiper/less/pagination';
import "tailwindcss";

import { BrowserRouter as Router} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>

    <App />
    </Router>
  </React.StrictMode>
);

