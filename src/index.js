import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Summary from './pages/Summary';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/summary" element={<Summary/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
