import React from 'react'
import ReactDOM from 'react-dom/client'
import {HashRouter } from "react-router-dom";
import 'animate.css';

import {HeroesApp} from './HeroesApp'
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <HeroesApp />
    </HashRouter>
  </React.StrictMode>,
)
