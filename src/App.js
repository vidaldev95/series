import React, { useEffect, useState } from 'react'
import Header from './Header'
import Generos from './Generos'
import NewGenre from './NewGenre'
import EditGenre from './EditGenre'

import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './styles.css'

function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get('/api').then(res => {
      setData(res.data)
    })
  }, [])
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path='/generos/:id' exact component={EditGenre} />
          <Route path='/generos/novo' exact component={NewGenre} />
          <Route path='/generos' exact component={Generos} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
