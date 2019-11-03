import React from 'react'
import Header from './Header'
import Generos from './Generos'
import Series from './Series'
import NewSerie from './NewSerie'
import InfoSeries from './InfoSeries'
import NewGenre from './NewGenre'
import EditGenre from './EditGenre'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './styles.css'

function App() {

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path='/generos' exact component={Generos} />
          <Route path='/generos/novo' exact component={NewGenre} />
          <Route path='/generos/:id' exact component={EditGenre} />        
          
          <Route path='/series' exact component={Series} />
          <Route path='/series/novo' exact component={NewSerie} />
          <Route path='/series/:id' exact component={InfoSeries} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
