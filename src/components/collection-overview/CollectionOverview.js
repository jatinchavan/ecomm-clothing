import React from 'react';

import CollectionItem from '../collection-item/CollectionItem';

import './CollectionOverview.styles.scss';
import { Link } from 'react-router-dom';

// List of All Collection Items
const CollectionPreview = ({title, items, routeName}) => (
    <div className='collection-preview'>
        <Link to={`/shop/${routeName}`}>
            <h1 className='title'>{title.toUpperCase()}</h1>
        </Link>
        <div className='preview'>
            {items.filter((item, idx) => idx < 4).map(item => (
                <CollectionItem key={item.id} item={item}/>
            ))}
        </div>
    </div>
);

export default CollectionPreview;