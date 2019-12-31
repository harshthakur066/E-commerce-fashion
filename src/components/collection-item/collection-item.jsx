import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button';
import { addItem } from '../../redux/cart/cart-action';

import './collection-item.scss';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'> {price * 70} </span>
            </div>
            <CustomButton onClick={() => addItem(item)} className='custom-button'  > ADD TO CART </CustomButton>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);