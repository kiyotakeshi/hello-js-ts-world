import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 第一引数に渡された React のコンポーネントを DOM に描画して、
// 第二引数で指定された HTML 要素に上書き
ReactDOM.render(
  // React で作るアプリケーションはコンポーネント(UIを表現するパーツの単位)の組み合わせで構成される
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('react')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
