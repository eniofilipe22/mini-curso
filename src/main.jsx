import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header/index'
import App from './App.jsx'
import Footer from './components/footer/index'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer link="https://github.com/eniofilipe22/mini-curso"/>
  </React.StrictMode>,
)
