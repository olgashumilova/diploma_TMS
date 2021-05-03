import './App.scss';

import MainPage from './components/MainPage'
import GoodsPage from './components/GoodsPage'
import AddressesPage from './components/AddressesPage'
import CartPage from './components/CartPage'

import './source/scss/components/_header.scss'
import './source/scss/components/_footer.scss'

import './source/scss/components/MainPage/_main.scss'
import './source/scss/components/GoodsPage/_goodspage.scss'
import './source/scss/components/AddressesPage/_addressespage.scss'
// import './source/scss/components/CartPage/_cartpage.scss'

import './source/scss/config/_reset.scss'

// function App() {
//   return (
//     <div className="App">

//       <MainPage />
//       <GoodsPage />

//     </div>
//   );
// }

// export default App;

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>

      <header className = 'header'>

        <div className = 'header__container'>

          <h1 className = 'title container'>ULTRAVIOLET</h1>
          <h2 className = 'container'> <Link to="/">Главная</Link> </h2>
          <h2 className = 'container'> <Link to="/catalog">Каталог</Link> </h2>
          <h2 className = 'container'> <Link to="/addresses">Адреса</Link> </h2>
          <button className = 'header__cart container'> <Link to="/cart"></Link> </button>

        </div>

      </header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            
        <Switch>

          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/catalog">
            <Catalog />
          </Route>

          <Route path="/addresses">
            <Addresses />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <MainPage />;
}

function Catalog() {
  return <GoodsPage />;
}

function Addresses() {
  return <AddressesPage />;
}

function Cart() {
  return <CartPage />
}
