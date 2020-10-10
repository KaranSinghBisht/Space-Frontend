import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home } from './pages/home'
import { Forum } from './pages/forum'
import { Explore } from './pages/explore'
import  { ContentCard } from './components/ContentCard';

import './styles/variables.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/forum" component={Forum} />
        <Route path="/" component={Home} />
      </Switch>
      <ContentCard title="This is post title" content="@username" date={new Date()} />
    </div>
  )
}

export default App
