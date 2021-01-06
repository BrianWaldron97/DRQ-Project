import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Import comps
import { HeaderComp } from './components/headerComp';
import { FooterComp } from './components/footerComp';
import { ContentComp } from './components/contentComp';
import { AddBook } from './components/addBook';
import { Repository } from './components/repository';
import { EditBook } from './components/editBook';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

// React Router DOM
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  // Render
  render() {
    return (
      <Router>
        <div className="App">

          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Book Repo</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/repository">Repository</Nav.Link>
              <Nav.Link href="/addBook">Add Book</Nav.Link>
            </Nav>
          </Navbar>

          <br></br>

          <Switch>
            {/*  Switching in and out components  */}
            <Route path='/' component={ContentComp} exact />
            <Route path='/addBook' component={AddBook}/>
            <Route path='/repository' component={Repository}/>
            <Route path='/editBook/:id' component={EditBook}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
