import React from 'react';
import {Spinner} from 'react-bootstrap';

function Loading(props) {
    return (
        <div className='loading-container'>
            <Spinner animation="border" variant="primary" />
        </div>
    )
}

export default Loading;
