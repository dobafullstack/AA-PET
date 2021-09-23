import Rating from 'react-rating';

import React from 'react'

export function MyRating({readonly, point}) {
    return (
        <Rating
            readonly={readonly}
            initialRating={point}
            emptySymbol="fal fa-star"
            fullSymbol="fas fa-star"
            fractions={1}
            style={{ color: '#ffd700' }}
        />
    );
}
