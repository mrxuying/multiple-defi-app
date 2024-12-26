import React from 'react';
import ReactDOM from 'react-dom/client';
import zhCN from 'antd/locale/zh_CN'
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import store from './store'
import App from './App';
import './index.less'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
        <App />
    </Provider>
  </ConfigProvider>
);
