// React Components 
import MainPage from './components/MainPage'
import GoodsPage from './components/GoodsPage'
import AddressesPage from './components/AddressesPage'
import CartPage from './components/CartPage'

import SubscribeComponent from './components/SubscribeComponent'
// Actions
// import { getGoods } from './actions'

//Reducers
// import GoodsReducer from './reducers/GoodsReducer'

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

// Icons
import instagramIcon from './source/img/icons/instagram-icon.png'
import facebookIcon from './source/img/icons/facebook-icon.png'
import twitterIcon from './source/img/icons/twitter-icon.png'


// Router
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

          <button className = 'button container'> 
            <Link className = 'button__link' to="/"><h2 className = 'button__title'>Главная</h2></Link>
          </button>

          <button className = 'button container'> 
            <Link className = 'button__link' to="/catalog"><h2 className = 'button__title'>Каталог</h2></Link> 
          </button>

          <button className = 'button container'> 
            <Link className = 'button__link' to="/addresses"><h2 className = 'button__title'>Адреса</h2></Link>
          </button>

          <button className = 'button header__cart container'> 
            <Link className = 'button__link' to="/cart"><p>1{}</p></Link> 
          </button>

        </div>

        <button className ="hamburger"></button>

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

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>

      <footer className = 'footer'>
        <div className = 'footer__container'>
            <div className = 'footer__inner-container'>
              <p className = 'footer__title'>Будем на связи</p>
              <div className = 'icons-container'>
                  <a href = 'https://www.facebook.com/'><img src = {facebookIcon} alt = 'Facebook icon'/></a>
                  <a href = 'https://twitter.com/?lang=ru'><img src = {twitterIcon} alt = 'Twitter icon'/></a>
                  <a href = 'https://www.instagram.com/?hl=ru'><img src = {instagramIcon} alt = 'Instagram icon'/></a>
              </div>
            </div>
            <div className = 'footer__inner-container'>
              <p className = 'footer__title'>Давайте дружить</p>
              <input 
                  className = 'footer__email'
                  type = 'text' 
                  placeholder = 'example@email.com'
                  // onChange = {(event) => onChangeCredentials(event.target.value, 'email')}
                  // value = {email}
              />
              <button className = 'footer__button'>Ok</button>
            </div>
            <div className = 'footer__inner-container'>
              <p className = 'footer__title'>Нужна помощь?</p>
              <p>+7 (495) 000-00-00</p>
              <p>info@mysite.ru</p>
            </div>
          </div>
          <div className = 'footer__container'>
              <p className = 'footer__last-line'>&#169; 2021 МАГАЗИН ОДЕЖДЫ ULTRAVIOLET</p>
          </div>
      </footer>
      
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
