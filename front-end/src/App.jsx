import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './styles/variables.css'
import './App.css'
import { Home } from './pages/home'
import { Forum } from './pages/forum'
import { Explore } from './pages/explore'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/forum" component={Forum} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  )
}

export default App