import { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'

import instagramIcon from '../source/img/icons/instagram-icon.png'
import facebookIcon from '../source/img/icons/facebook-icon.png'
import twitterIcon from '../source/img/icons/twitter-icon.png'


const FooterComponent = () => {

    const [email, setEmail] = useState('')

    const onChangeCredentials = (event, fieldName) => {

        if (fieldName === 'email') {
            setEmail(event.target.value)
        }
    }

    return (
        
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
                    onChange = {(event) => onChangeCredentials(event, 'email')}
                    value = {email}
                />
              <button className = 'footer__button' 
                onClick = {async() => {
                  const response = await axios.post('http://localhost:3001/subscription', {email})
                  swal(response.data);
                }}>Ok</button>              
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

    )

}

export default FooterComponent