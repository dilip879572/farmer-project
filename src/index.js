import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
ReactDOM.render(
  <React.StrictMode>
    <div className='container-fluid'>
        <div className='row top'>
          <div className='col-sm-4'>Dilip kumar</div>
          <div className='col-sm-4'><a href='#'>dilip.879572@gmail.com</a></div>
          <div className='col-sm-4'>+91 6307661853 || +91 8795720084</div>
        </div>
        <App/>
      </div>
   
  </React.StrictMode>,
  document.getElementById('root')
);
