import React, { useState, useEffect } from 'react';

import axios from 'axios'

export const ItemPage = () => {

    // const getskirtItem = ({
    //     name,
    //     price,
    //     img
    // }) => {
    //     useEffect( async () => {
    
    //         await axios.get('http://localhost:3001/goods/skirt').then((response) => {
    //         console.log(response.data);
    //         }).catch ((error) => {
    //           console.error(error);
    //         })

    //     }, [])
    // }
    

    return (

        <div className = 'goods'>

            {/* <p>{skirt.name}</p>
            <p>{skirt.price}</p>
            <p>{skirt.image}</p> */}

            Hello world suka

            {/* {item.map((item) => {
                return (

                    <div className = 'goods-page'>
                        <div className = 'goods-page__container' >
                            <div className = 'goods-page__item'>
                                <img className = 'goods-page__item-picture item-container' src = {item.image}></img>
                                <button className = 'goods-page__item-button'>Перейти к товару</button>
                                <p className = 'goods-page__item-name item-container'>{item.name}</p>
                                <p className = 'goods-page__item-price item-container'>{item.price}$</p>
                                <button className = 'goods-page__button item-container'>В корзину</button>
                            </div>
                        </div>
                    </div>
                )
            })} */}

        </div>
    )
}

export default ItemPage