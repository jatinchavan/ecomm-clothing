import React from 'react';

import './FormInput.styles.scss';

const FormInput = ({handler, label, ...otherProps}) => (
    <div className="group">
        <input className='form-input' onChange={handler} {...otherProps}/>
        {
            label ? <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label> : null

        }

    </div>
)

export default FormInput;

//{...otherProps} - name:{name}, value:{value}, type:{type}