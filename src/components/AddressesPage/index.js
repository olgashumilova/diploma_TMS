import React, { Component } from 'react'

class AddressesPage extends Component {
    render() {
        return (
            <div className = 'main__addresses'>
                <p>Адреса магазинов</p>
                <p>Ждем вас в торговых центрах:</p>
                <p>Блюз</p>
                <p>ул. Арбат, 1а, Москва, Россия</p>
                <p>Телефон: +7 (495) 000-00-00</p>
                <p>ПН–СБ: 10:00–17:00</p>
                <p>ВС: выходной</p>

                <br></br>

                <p>Ева</p>
                <p>ул. Арбат, 1а, Москва, Россия</p>
                <p>Телефон: +7 (495) 000-00-00</p>
                <p>ПН–СБ: 10:00–17:00</p>
                <p>ВС: выходной</p>
            </div>
        )
    }
}

export default AddressesPage
