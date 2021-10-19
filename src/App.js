import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Home/Header/Header'
import Home from './Pages/Home/Home/Home'
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound'
import Service from './Pages/Service/Service'
import LogIn from './Pages/LogIn/LogIn';
import Register from './Pages/Home/Register/Register';
import Authprovider from './Context/Authprovider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Booking from './Pages/Booking/Booking';
function App() {
  return (
    <div className="App">
      <Authprovider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/about'>
              <About></About>
            </PrivateRoute>
            <PrivateRoute path='/service'>
              <Service></Service>
            </PrivateRoute>
            <Route path='/singleservice/:serviceId'>
              <Booking></Booking>
            </Route>
            <Route path='/login'>
              <LogIn></LogIn>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </Authprovider>
    </div>
  );
}

export default App;
