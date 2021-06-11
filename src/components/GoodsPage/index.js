import React, { useState, useEffect} from 'react';
import axios from 'axios'
import swal from 'sweetalert'

import { useDispatch } from 'react-redux'
import { addItemToCart, decreaseQuantity, increaseQuantity } from '../../actions'

function GoodsPage () {

    const [goods, setGoods] = useState(null)
    const [currentItem, setItem] = useState(null);
    const [itemCount, setCount] = useState(1);

    useEffect(() => {
        async function fetchData() {
            await axios.get('http://localhost:3001/goods').then((response) => {
                setGoods(response.data)
            }).catch ((error) => {
                console.log(error);
            })
        }
        fetchData();
    }, []);
    
    const dispatch = useDispatch()

    return (

        <div className = 'goods'>
            
            <p className = 'goods-page__title'>Каталог товаров</p>

            <div className = 'goods-page'>
                <div className = 'goods-page__container' >

                {!currentItem && goods && goods.map((item) => {

                    return (

                        <div className = 'goods-page__item' key = {item.name}>
                            <img className = 'goods-page__item-picture item-container' src = {item.image} alt = 'item'></img>

                            <button className = 'goods-page__item-button' onClick = {() => setItem(item)}>Перейти к товару</button>

                            <p className = 'goods-page__item-name item-container'>{item.name}</p>
                            <p className = 'goods-page__item-price item-container'>{item.price}$</p>
                            <button 
                                className = 'goods-page__button item-container' 
                                onClick = {() => {
                                    dispatch(addItemToCart(item),
                                    )}}>
                                    В корзину
                            </button>
                        </div>

                    )
                })}

                {currentItem && 
                    
                    <div className = 'goods-page__current-item'>
                        <div className = 'goods-page__current-item-image-container'>
                            <img className = 'goods-page__current-item-image' src = {currentItem.image} alt = 'item'></img>
                        </div>

                        <div className = 'goods-page__current-item-text-container'>
                            <p className = 'goods-page__current-item-container'>{currentItem.name}</p>
                            <p className = 'goods-page__current-item-container'>{currentItem.price * itemCount}$</p>

                            <div className = 'goods-page__current-item-count-container'>

                                <button className = 'goods-page__current-item-btn'
                                    onClick = {() => {
                                        if (itemCount > 1) {
                                            setCount(itemCount - 1)
                                            dispatch(decreaseQuantity(currentItem))
                                        } else {
                                            setCount(1)
                                        } 
                                    }}>
                                        -
                                </button>
                                <p className = 'goods-page__current-item-counter'>{itemCount}</p>
                                <button className = 'goods-page__current-item-btn' 
                                    onClick = {() => {
                                        setCount(itemCount + 1)
                                        dispatch(increaseQuantity(currentItem))
                                    }}>
                                        +
                                </button>

                            </div>

                            <p className = 'goods-page__current-item-container goods-page__current-desc'>{currentItem.description}</p>

                            <div className = 'goods-page__current-item-btn-container'>
                                <button className = 'goods-page__button item-container' 
                                    onClick = {() => {
                                        if (itemCount === 0) {
                                            swal('Укажите число товара')
                                        } else {
                                            dispatch(addItemToCart(currentItem),   
                                            )
                                        }
                                    }}>
                                        В корзину
                                </button>

                                <button className = 'goods-page__current-item-container goods-page__button'
                                    onClick = {() => {
                                        setCount(0)
                                        setItem(null)}}>
                                    Назад
                                </button>
                            </div>

                        </div>
                    </div>
                }

            </div>
            
        </div>
        
        </div>
        
    )
}

export default GoodsPage