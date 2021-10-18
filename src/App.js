import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import Header from './Pages/Home/Header/Header'
import Home from './Pages/Home/Home/Home'
import Banner from './Pages/Home/Banner/Banner';
import NotFound from './Pages/Home/NotFound/NotFound';
import Service from './Pages/Home/Service/Service';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Header></Header>
          <NotFound></NotFound>
          <Route exact path="/home">
           <Home></Home>
          </Route>
          <Route path='./home'>
            <Banner></Banner>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
