import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'

import { ItemPage } from '../ItemPage/index'
import { getGoods } from '../../actions/GoodsActions';
import GoodsActions from '../../actions/GoodsActions'
import { initialState } from '../../reducers/GoodsReducer'

import { connect } from 'react-redux'

function GoodsPage () {
    
    const goods = useSelector( (initialState) => {return initialState.goods})
    // console.log(goods);

    const dispatch = useDispatch();

    // const goods = useSelector(getGoods());

    useEffect(() => {
        dispatch(getGoods());
    }, [dispatch]);

        // const [goods, setGoods] = useState([])
    
        // useEffect( async () => {
    
        //     await axios.get('http://localhost:3001/goods').then((response) => {
        //     setGoods(response.data);
        //     }).catch ((error) => {
        //       console.error(error);
        //     })

        // }, [])

    return (

        <div className = 'goods'>

            <p className = 'goods-page__title'>Каталог товаров</p>

            <div>{goods}</div>
            {/* {goods.map((item) => {
                return (

                    <div className = 'goods-page'>
                        <div className = 'goods-page__container' >
                            <div className = 'goods-page__item'>
                                <img className = 'goods-page__item-picture item-container' src = {item.image}></img>
                                <button className = 'goods-page__item-button' onClick = {ItemPage}>Перейти к товару</button>
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

const mapStateToProps = state => ({
    ...state
})
export default connect(mapStateToProps) (GoodsPage)