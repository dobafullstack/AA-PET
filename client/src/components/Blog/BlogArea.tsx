import React, { ReactElement } from 'react'
import { BlogItem } from '.'

interface Props {
    
}

export default function BlogArea({}: Props): ReactElement {
    return (
        <div className="section" style={{marginTop: '5rem'}}>
        <div className="container">

            <div className="row" data-aos="fade-up" data-aos-duration="1000">
                <div className="col-12">
                    <div className="section-title text-center">
                        <h2 className="title">From Our Blog</h2>
                    </div>
                </div>
            </div>

            <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 mb-n8">

                <BlogItem />
                <BlogItem />
                <BlogItem />

            </div>

        </div>
    </div>
    )
}
