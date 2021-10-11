import Rating from 'react-rating';

import React from 'react';

export function MyRating(props: any) {
    const { point } = props;

    return (
        <Rating
            initialRating={point}
            emptySymbol="fal fa-star"
            fullSymbol="fas fa-star"
            fractions={1}
            style={{ color: '#ffd700' }}
            {...props}
        />
    );
}
