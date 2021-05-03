import React, { Component } from 'react'

class MainPage extends Component {
    render() {
        return (
            <div>

                <main className = 'main'>

                    <div className = 'main-page'>

                        <div className = 'main-page__container'>
                            <p className='main-page__title'>Начните покупать прямо сейчас!</p>
                            <button className='main-page__button'>В каталог</button>
                        </div>

                    </div>

                </main>

                <footer className = 'footer'>

                    <div className = 'footer__container'>

                        <div className = 'footer__inner-container'>

                            <p className = 'footer__title'>Будем на связи</p>
                            
                            <a href = 'https://www.facebook.com/'><img src = '' alt = 'Facebook icon'/></a>
                            <a href = 'https://twitter.com/?lang=ru'><img src = '' alt = 'Twitter icon'/></a>
                            <a href = 'https://www.instagram.com/?hl=ru'><img src = '' alt = 'Instagram icon'/></a>

                        </div>

                        <div className = 'footer__inner-container'>

                            <p className = 'footer__title'>Давайте дружить</p>
                            <input type = 'text'></input>
                            <button>Ok</button>

                        </div>

                        <div className = 'footer__inner-container'>

                            <p className = 'footer__title'>Нужна помощь?</p>
                            <p>+7 (495) 000-00-00</p>
                            <p>info@mysite.ru</p>

                        </div>

                    </div>


                    <div className = 'footer__container'>

                        <p>&#169; 2021 МАГАЗИН ОДЕЖДЫ ULTRAVIOLET</p>

                    </div>

                </footer>
            </div>
        )
    }
}

export default MainPage;