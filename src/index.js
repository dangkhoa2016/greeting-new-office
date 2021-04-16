import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'
import './base.css'
import Demo1 from './demos/Demo1'

// Demos inspired by:
// https://twitter.com/beesandbombs/status/1329796242298245124

function App() {
  return (
    <Router basename="/">
      <div className="frame"></div>
      <div className="content">
        <h2 className="content__title greeting">Chúc mừng Khải Lâm Consulting</h2>
        <h3 className="content__title greeting_last">Chúc mừng văn phòng mới</h3>
      </div>
      <div id="animation">
        <Switch>
          <Route exact path="/demo1">
            <Demo1 />
          </Route>
          <Route path="*">
            <Redirect to="/demo1" />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
