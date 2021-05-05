import React from 'react';

import './directory.styles.scss';
import MenuItem from '../homepage-menu-items/Homepage-Menu-Items';

import {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';

// This is the directory, i.e collection of the menu items
const Directory = ({sections}) => (
    <div className='directory-menu'>
        {sections.map(({title, imageUrl, id, size, linkUrl}) => (<MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
            linkUrl={linkUrl}/>))}
    </div>
)

const mapStateToProps = state => {
    return {sections: selectDirectorySections(state)}
}

export default connect(mapStateToProps)(Directory);