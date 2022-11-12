import React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from "./App"
import './index.scss'


const container = document.getElementById('app-root') as Element;

const root = ReactDOM.createRoot(container);
root.render(<App/>);
