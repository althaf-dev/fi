/**
 * @file - Toggle Component
 */

'use client';

import React, { memo } from 'react';

import './styles.scss';

const Toggle = (props: { label: any; value: any; onChange: any; id: string; }) => {
    const {
        label, value, onChange, id,
    } = props;

    // console.log(onChange);

    return (
        <div className='form-group toggle' style={{ padding: '10px' }}>
            <label style={{ marginLeft: '15px', color: '#8D8D8D' }} htmlFor={id}>{label}</label>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <div className='switch' onClick={onChange} style={{ marginLeft: 'auto', marginRight: '20px' }}>
                <input type='checkbox' checked={value} readOnly id={id} />
                <span className='slider round' />
            </div>
        </div>
    );
};

export default memo(Toggle);
