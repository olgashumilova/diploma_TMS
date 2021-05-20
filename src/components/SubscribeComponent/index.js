import {useState, useEffect} from 'react'
import axios from 'axios'
    

export const SubscribeComponent = () => {

    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const onChangeCredentials = (event, value) => {
        if (!value) {
            setError('Введите адрес почты')
        } else {
            setEmail(event.target.value)
            setError('')
        }
    }

    const enterEmail = async () => {
        try {
            const response = await axios.post('http://localhost:3001/subscription', {
                email,
            });
            setEmail('')

        } catch (err) {
            console.log(err.response)
            setError(err.response.data)
        }
    }

    useEffect(() => {
        if(email) {
            enterEmail()
        }
        
    }, [email])

    return (
        <footer className = 'footer'>
        <div className = 'footer__container'>
            <div className = 'footer__inner-container'>
              <p className = 'footer__title'>Будем на связи</p>
              <div className = 'icons-container'>
                  <a href = 'https://www.facebook.com/'><img src = ''alt = 'Facebook icon'/></a>
                  <a href = 'https://twitter.com/?lang=ru'><img src = "" alt = 'Twitter icon'/></a>
                  <a href = 'https://www.instagram.com/?hl=ru'><img src = "" alt = 'Instagram icon'/></a>
              </div>
            </div>
            <div className = 'footer__inner-container'>
              <p className = 'footer__title'>Давайте дружить</p>
              <input 
                  className = 'footer__email'
                  type = 'text' 
                  placeholder = 'example@email.com'
                  onChange = {(event) => onChangeCredentials(event.target.value, 'email')}
                  value = {email}
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
    )

}

export default SubscribeComponent

    // return (
    //     <div>
            
    //     </div>
    // )

