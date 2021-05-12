import './App.css';
import Login from './components/login/Login';
import HomeScreen from './components/products/HomeScreen';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/header/Header';
import PizzaScreen from './components/products/PizzaScreen';
import Cart from './components/cart/Cart';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Route exact path='/' component={HomeScreen}/>
        <Route path='/product/:id' component={PizzaScreen}/>
        <Route  path='/login' component={Login}/>
        <Route path='/cart' component={Cart}/>
      </Router>
    </div>
  );
}



export default App;
