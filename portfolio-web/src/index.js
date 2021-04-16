/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
// eslint-disable-next-line import/no-named-as-default
import reportWebVitals from './reportWebVitals';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/portfolio/about" component={About} />
      <Route path="/portfolio/projects" component={Projects} />
      <Route path="/portfolio/contact" component={Contact} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
