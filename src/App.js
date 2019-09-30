import React, { useEffect, useState } from 'react'
import Header from './Header'
import Generos from './Generos'
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './styles.css'
import NewGenre from './NewGenre'

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
        <Route path='/generos/novo' exact component={NewGenre} />
        <Route path='/generos' exact component={Generos} />

      </div>
    </Router>
  )
}

export default App
