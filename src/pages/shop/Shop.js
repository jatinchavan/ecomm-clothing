import React, {Component} from 'react';
import SHOP_DATA from './Shop.data';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        return <div className='shop-page'>
            {
                this.state.collections.map((item) => (
                    <CollectionPreview key={item.id} title={item.title} items={item.items} />
                ))
            }
        </div>
    }
}

export default ShopPage;