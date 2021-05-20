import React from 'react'

import { YMaps, Map, Placemark } from 'react-yandex-maps';

function AddressesPage() {

  const mapData = {
    center: [55.751574, 37.573856],
    zoom: 9,
  };
  
  const coordinates = [
    [55.684758, 37.738521],
    [55.78138104651585, 37.53506068188478]
  ];
  
  return (
    
    <div>
      <div className = 'main__addresses'>
        
            <p className = 'main__addresses-header'>Адреса магазинов</p>
            <p className = 'main__addresses-text'>Ждем вас в торговых центрах:</p>
            <p className = 'main__addresses-title'>Блюз</p>
            <p className = 'main__addresses-text'>ул. Арбат, 1а, Москва, Россия</p>
            <p className = 'main__addresses-text'>Телефон: +7 (495) 000-00-00</p>
            <p className = 'main__addresses-text'>ПН–СБ: 10:00–17:00</p>
            <p className = 'main__addresses-text'>ВС: выходной</p>
            <p className = 'main__addresses-title'>Ева</p>
            <p className = 'main__addresses-text'>ул. Арбат, 1а, Москва, Россия</p>
            <p className = 'main__addresses-text'>Телефон: +7 (495) 000-00-00</p>
            <p className = 'main__addresses-text'>ПН–СБ: 10:00–17:00</p>
            <p className = 'main__addresses-text'>ВС: выходной</p>

            <YMaps>
              <div className = 'main__addresses-map'>
                <Map defaultState={mapData}>
                  {coordinates.map(coordinate => 
                    <Placemark geometry={coordinate} />)}
                </Map>
              </div>
            </YMaps>

      </div>
    </div>
    
  )
}

export default AddressesPage