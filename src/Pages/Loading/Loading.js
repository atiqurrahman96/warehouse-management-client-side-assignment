import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ height: '300px' }} className='w-100 flex items-center justify-center '>
            <Spinner animation="grow" variant="primary" />
        </div>
    );
};

export default Loading;