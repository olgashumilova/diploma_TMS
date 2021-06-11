import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, clearCart } from '../../actions'

import axios from 'axios'
import swal from 'sweetalert'

function CartPage() {

    const cart = useSelector(state => state.cart)

    let totalPrice = 0
    let neededItem = null
    
    const dispatch = useDispatch()

    const [userName, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    const onChange = (event, fieldName) => {

        if (fieldName === 'userName') {
            setName(event.target.value)

        } else if (fieldName === 'surname') {
            setSurname(event.target.value)

        } else if (fieldName === 'phone') {
            setPhone(event.target.value)

        } else if (fieldName === 'address') {
            setAddress(event.target.value)
        }
    }

    if (cart.length === 0) {
        return (
            <div className = 'cart__empty'>
                <p>Ваша корзина пуста. </p>
                <p>Перейдите в  <Link to = "/catalog"> каталог</Link>, чтобы добавить товар в корзину</p>
            </div>
        )
        
    } else {

        return (
            <div className = 'cart__full'>

                <div className = 'cart__full-items'>

                    <p className = 'cart__full-title'>Моя корзина</p>

                    {cart.map((item, index) => {
                    
                        totalPrice += item.price
                        neededItem = item
                        
                        return (
                            
                            <div className = 'cart__full-item'key ={`${item.id}${index}`}>

                                <div className = 'cart__full-item-container'>
                                    <img className = 'cart__full-item-image'src = {item.image} alt = 'item'></img>
                                    <p key = {`${item.id}${index}`}>
                                        {item.name}
                                    </p>
                                    <p>{item.price}$</p>
                                    <div className = 'cart__full-item-button'>
                                        <button
                                            onClick = {() => dispatch(removeItemFromCart(index))}>
                                                x
                                        </button>
                                    </div>
                                </div>                            
                            </div>
                        )   
                    })}
                    
                    <button
                        className = 'cart__full-item-clear-button'
                        onClick = {() => dispatch(clearCart(neededItem))}
                    >Очистить корзину</button>
                </div>

                <div className = 'cart__full-details'>
                    <p className = 'cart__full-title'>Детали заказа</p>
                    <div className = 'cart__full-details-upper'>

                        <div>
                            <p className = 'details'>Сумма</p>
                            <p className = 'details'>Доставка</p>
                            <select className = 'details'>
                                <option>Беларусь</option>
                                <option>Росиия</option>
                                <option>Украина</option>
                            </select>
                        </div>
                        
                        <div>
                            <p className = 'details'>{totalPrice}$</p>
                            <p className = 'details'>Бесплатно</p>
                        </div>
                        
                    </div>

                    <div>
                        <form className = 'cart__full-details-form'>
                            Имя:<input 
                                    type = 'text' 
                                    className = 'cart__full-details-form-input'
                                    onChange = {(event) => onChange(event, 'userName')} value = {userName}
                                />
                            Фамилия:<input 
                                        type = 'text' 
                                        className = 'cart__full-details-form-input'
                                        onChange = {(event) => onChange(event, 'surname')} value = {surname}
                                    />
                            Телефон:<input 
                                        type = 'text' 
                                        className = 'cart__full-details-form-input'
                                        onChange = {(event) => onChange(event, 'phone')} value = {phone}
                                    />
                            Адрес (город, улица, дом, корпус, квартира):<input 
                                        type = 'text' 
                                        className = 'cart__full-details-form-input'
                                        onChange = {(event) => onChange(event, 'address')} value = {address}
                                    />
                        </form>
                    </div>

                    <div className = 'cart__full-details-lower'>
                        <p className = 'cart__full-details-lower-total'>Итого {totalPrice}$</p>
                        <button 
                            className = 'cart__full-details-lower-button'
                            onClick = {async() => {
                                const response = await axios.post('http://localhost:3001/order', 
                                {userName, surname, phone, address, cart})
                                swal(response.data);
                            }}>
                                Оформить заказ
                        </button>
                    </div>
                    
                </div>

            </div>
        )
    }  
}

export default CartPage