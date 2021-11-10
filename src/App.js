import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Register from './pages/Login/Register/Register';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Purchase from './pages/Purchase/Purchase';
import Explores from './pages/Explores/Explores';
import Notfound from './pages/Notfound/Notfound';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/explores">
              <Explores />
            </PrivateRoute>
            <PrivateRoute path="/purchase/:productId">
              <Purchase />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
