import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from "../../components/collection-overview/collection-overview";
import { firestore, convertCollectionSnapshotToMaps } from '../../firebase/firebase-utils';
// import CollectionPage from '../collection/collection';

import { updateCollections } from '../../redux/shop/shop-action';

class ShopPage extends React.Component {

    unSubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collection')

        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionSnapshotToMaps(snapshot);
            updateCollections(collectionsMap);
        });
    }

    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                {/* <Route path='/shop/:catogryId' component={CollectionPage} /> */}

                {/* <Route path={`${match.path}/:categoryId`} component={CollectionPage} /> */}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(
    null,
    mapDispatchToProps
)(ShopPage);