import React from 'react'
import ReactLoading from 'react-loading';

export default function Loading() {
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ReactLoading type='spinningBubbles' color='#f6ab49' height={150} width={150} />
        </div>
    );
}
