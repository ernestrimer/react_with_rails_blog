import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import Posts from './components/posts/Posts';

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/posts' component={Posts} />
      <Route component={NoMatch} />
    </Switch>
    {/* <Footer /> */}
  </>
)
export default App;