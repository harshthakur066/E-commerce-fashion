import React from 'react';

// import { CollectionItem } from '../../components/collection-item/collection-item';

import './catogry.scss';

const CategoryPage = ({ match }) => {
    console.log(match);
    return (
        <div className='catogry'>
            <h2> Catogry Page</h2>
        </div>
    );
};

export default CategoryPage;