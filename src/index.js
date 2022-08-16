import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Mint from './pages/Mint';
import Staking from './pages/Staking';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import NotFound from './pages/NotFound';
import MainApp from './pages/MainApp';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MainApp>
        <Routes>
            <Route exact path="/staking" element={<Staking />} />
            {/* <Route exact path="/mint" element={<Mint />} />           */}
            <Route exact path="/" element={<App/>} />
            <Route path='' element={<NotFound />} />       
        </Routes>
      </MainApp>      
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
