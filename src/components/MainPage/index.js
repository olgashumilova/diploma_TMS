import React from 'react'
import { Link } from "react-router-dom";

function MainPage() {
    return (
        <div>

            <main className = 'main'>
                <div className = 'main-page'>
                    <div className = 'main-page__container'>
                        <p className='main-page__title'>Начните покупать прямо сейчас!</p>
                        <Link className = 'main-page__link' to="/catalog">
                            <button className = 'main-page__button'>В каталог</button>
                        </Link>
                    </div>
                </div>
            </main>
            
        </div>
    )
}

export default MainPage