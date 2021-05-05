import React from 'react';

import {connect} from 'react-redux';
import {selectCollectionForPreview} from '../../redux/shop/shop.selectors';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';

const ShopPage = ({collections}) => (
    <div className='shop-page'>
        {collections.map((item) => (<CollectionOverview key={item.id} title={item.title} items={item.items}/>))}
    </div>
);

const mapStateToProps = state => {
    return {collections: selectCollectionForPreview(state)}
};

export default connect(mapStateToProps)(ShopPage);