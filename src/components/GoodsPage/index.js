import React, { Component } from 'react'

class GoodsPage extends Component {
    render() {
        return (
            <div>
                <div className = 'goods-page'>

                    <p className = 'goods-page__title'>Каталог товаров</p>

                    <div className = 'goods-page__container'>

                        <div className = 'goods-page__item'>
                            <img className = 'goods-page__item-picture' src = '../../source/img/items/skirt.jpg'></img>
                            <p className = 'goods-page__item-name'>Юбка</p>
                            <p className = 'goods-page__item-price'>100$</p>
                            <button className = 'goods-page__button'>В корзину</button>
                        </div>

                        <div className = 'goods-page__item'>
                            <img className = 'goods-page__item-picture' src = '../source/img/items/skirt.jpg'></img>
                            <p className = 'goods-page__item-name'>Платье</p>
                            <p className = 'goods-page__item-price'>100$</p>
                            <button className = 'goods-page__button'>В корзину</button>
                        </div>

                        <div className = 'goods-page__item'>
                            <img className = 'goods-page__item-picture' src = '../../source/img/items/skirt.jpg'></img>
                            <p className = 'goods-page__item-name'>Комбинезон</p>
                            <p className = 'goods-page__item-price'>100$</p>
                            <button className = 'goods-page__button'>В корзину</button>
                        </div>

                        <div className = 'goods-page__item'>
                            <img className = 'goods-page__item-picture' src = '../../source/img/items/skirt.jpg'></img>
                            <p className = 'goods-page__item-name'>Рубашка</p>
                            <p className = 'goods-page__item-price'>100$</p>
                            <button className = 'goods-page__button'>В корзину</button>
                        </div>

                        <div className = 'goods-page__item'>
                            <img className = 'goods-page__item-picture' src = '../../source/img/items/skirt.jpg'></img>
                            <p className = 'goods-page__item-name'>Пальто</p>
                            <p className = 'goods-page__item-price'>100$</p>
                            <button className = 'goods-page__button'>В корзину</button>
                        </div>

                        <div className = 'goods-page__item'>
                            <img className = 'goods-page__item-picture' src = '../../source/img/items/skirt.jpg'></img>
                            <p className = 'goods-page__item-name'>Брюки</p>
                            <p className = 'goods-page__item-price'>100$</p>
                            <button className = 'goods-page__button'>В корзину</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default GoodsPage
