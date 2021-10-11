import React from 'react';
import { MyRating } from './index';

export function RatingItem() {
    return (
        <div className="rating-item-wrapper my-4">
            <div className="d-flex justify-content-between">
                <h5 className="user-name">Duy Anh</h5>
                <div className="d-flex">
                    <span className="comment-time me-2">3 months ago</span>
                    <MyRating point={5} readonly />
                </div>
            </div>
            <span className="content">
                lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor
                sit lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit
            </span>
        </div>
    );
}
