import React from 'react'
import Loading from 'react-loading'

export default function MyLoading() {
    return (
        <div className='d-flex justify-content-center'>
            <Loading color="blue" type="spin"/>
        </div>
    )
}
