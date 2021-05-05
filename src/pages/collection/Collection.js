import React from 'react';

import './Collection.styles.scss';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/CollectionItem';

// Each individual collection. Eg shop/hats, shop/jackets, etc
const Collection = ({collection}) => {
    console.log(collection)
   return (
    <div className='Collection-page'>
        <h2 className='title'>{collection.title}</h2>
        <div className='items'>
            {
                collection.items.map(item => <CollectionItem key={item.id} item={item}/> )
            }
        </div>
    </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
        collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(Collection);