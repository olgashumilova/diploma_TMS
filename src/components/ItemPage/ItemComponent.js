import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';

import './style.css';

const getClassNames = (small) => {
  console.log('getclassnames');
  return {
    card: `card ${small && 'card-small'}`,
    cardImage: `card-image ${small && 'card-image-small'}`,
    cardContent: `card-content ${small && 'card-content-small'}`,
   }
};

const ItemComponent = ({
    name,
    price,
    image,
    }) => {
  
  // Пример мемоизации переменной в функциональном компоненте
  const classNames = useMemo( () => getClassNames(small), [small] );  

  console.log('card render');

  return (
    <div className={classNames.card}>
      <img
        src={image}
        className={classNames.cardImage}
        alt='item image'
      />
      <div className={classNames.cardContent}>
        <h2>{name}</h2>
        <h2>{price}</h2>
      </div>
    </div>
  )
}

/**
 * Библиотека propTypes используется для описания типов пропсов.
 * Применяется, когда в проекте нет TypeScript
 */
CardComponent.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    small: PropTypes.bool,
};

/**
 * Мемоизация функционального компонента, аналогично PureComponent
 */
export const Card = memo(CardComponent);