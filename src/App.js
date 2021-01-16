/* eslint-disable linebreak-style */
import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Home from './containers/Home'
import AllAuthors from './containers/AllAuthors'
import AllBooks from './containers/AllBooks'
import FindAuthor from './containers/FindAuthor'
import AddAuthor from './containers/AddAuthor'
import AddPublisher from './containers/AddPublisher'
import AddBook from './containers/AddBook'
import Login from './containers/Login'
import NavBar from './components/navBar'

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <div className="App" style={{ backgroundColor: '#222222' }}>
          <NavBar />
          <Switch>
            <Route path="/Login" component={Login} />
            <Route path="/Home" component={Home} />
            <Route path="/AllAuthors" component={AllAuthors} />
            <Route path="/AllBooks" component={AllBooks} />
            <Route path="/FindAuthor" component={FindAuthor} />
            <Route path="/AddAuthor" component={AddAuthor} />
            <Route path="/AddPublisher" component={AddPublisher} />
            <Route path="/AddBook" component={AddBook} />
          </Switch>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)

export default App
