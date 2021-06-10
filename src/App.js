// React Components 
import MainPage from './components/MainPage'
import GoodsPage from './components/GoodsPage'
import AddressesPage from './components/AddressesPage'
import CartPage from './components/CartPage'
import FooterComponent from './components/FooterPage'

// Main scss
import './App.scss'
import './source/scss/config/_reset.scss'

// Scss pages
import './source/scss/components/_header.scss'
import './source/scss/components/_footer.scss'
import './source/scss/components/MainPage/_main.scss'
import './source/scss/components/GoodsPage/_goodspage.scss'
import './source/scss/components/AddressesPage/_addressespage.scss'
import './source/scss/components/CartPage/_cartpage.scss'

// Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Hook
import { useSelector } from 'react-redux';

export default function App() {

  const totalQuantity = useSelector(state => state.totalQuantity)

  return (
    <Router>
      <div>

      <header className = 'header'>

        <div className = 'header__container'>

          <h1 className = 'title container'>ULTRAVIOLET</h1>

          <button className = 'button container'> 
            <Link className = 'button__link' to="/"><h2 className = 'button__title'>Главная</h2></Link>
          </button>

          <button className = 'button container'> 
            <Link className = 'button__link' to="/catalog"><h2 className = 'button__title'>Каталог</h2></Link> 
          </button>

          <button className = 'button container'> 
            <Link className = 'button__link' to="/addresses"><h2 className = 'button__title'>Адреса</h2></Link>
          </button>
          
          <Link className = 'button__link' to="/cart">
            <button className = 'button header__cart container'> 
              {totalQuantity}
            </button>
          </Link> 
        </div>

        <button className = "hamburger" onClick = {() => {
          let menu = document.getElementsByClassName('button')
          let mainHeader = document.getElementsByClassName('header')
          let headerContainer = document.getElementsByClassName('header__container')

          for (let j = 0; j < mainHeader.length; j++) {
            mainHeader[j].style.height === '100px' ? mainHeader[j].style.height = '250px' : mainHeader[j].style.height = '100px'
          }

          for (let k = 0; k < headerContainer.length; k++) {
            headerContainer[k].style.flexDirection === 'row' ? headerContainer[k].style.flexDirection = 'column' : headerContainer[k].style.flexDirection = 'row'
            headerContainer[k].style.flexWrap === 'wrap' ? headerContainer[k].style.flexWrap = 'inherit' : headerContainer[k].style.flexWrap = 'wrap'
          }

          for (let i = 0; i < menu.length; i++) {
            menu[i].style.display === 'none' ? menu[i].style.display = 'flex' : menu[i].style.display = 'none'
          }       
        }}></button>

      </header>

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

          <Route exact path="/">
            <Home />
          </Route>

        </Switch>
      </div>

      <div>{FooterComponent()}</div>
      
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