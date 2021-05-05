import React from 'react';

import './homepage.styles.scss';
import {connect} from 'react-redux';
import MenuItem from '../../components/homepage-menu-item/Homepage-Menu-Item';
import {selectHomepageSections} from '../../redux/homepage/homepage.selectors';

//The Homepage
const HomePage = ({sections}) => (
    <div className="homepage">
        <div className='homepage-menu'>
            {sections.map(({title, imageUrl, id, size, linkUrl}) => (<MenuItem
                key={id}
                title={title}
                imageUrl={imageUrl}
                size={size}
                linkUrl={linkUrl}/>))}
        </div>
    </div>
);

const mapStateToProps = state => {
    return {sections: selectHomepageSections(state)}
}

export default connect(mapStateToProps)(HomePage);