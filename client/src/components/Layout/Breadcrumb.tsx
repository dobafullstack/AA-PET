import React, { ReactElement } from 'react'

interface Props {
    title: string;
    children: React.ReactNode
}

export default function Breadcrumb({ children, title }: Props): ReactElement {
    return (
        <div className='section breadcrumb-area bg-bright'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <div className='breadcrumb-wrapper'>
                            <h2 className='breadcrumb-title'>{title}</h2>
                            <ul>
                                {children}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
