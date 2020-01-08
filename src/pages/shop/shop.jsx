import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from "../../components/collection-overview/collection-overview";
// import CategoryPage from '../catogry/catogry';

const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        {/* <Route path={`${ma/ch.path}/:categoryId`} component={CategoryPage} /> */}
    </div>
);
export default ShopPage;