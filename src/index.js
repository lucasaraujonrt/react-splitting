import React from 'react';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/es/locale/pt_BR';
import 'antd/dist/antd.css';
import store from './redux';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const redux = store();

ReactDOM.render(
  <Provider store={redux}>
    <ConfigProvider locale={ptBR}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
);