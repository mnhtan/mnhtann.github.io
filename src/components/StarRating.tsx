import React from 'react';

interface StarRatingProps {
    rating: number; // 1-5 stars
    size?: 'sm' | 'md' | 'lg';
    showNumber?: boolean;
    className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
    rating,
    size = 'md',
    showNumber = false,
    className = ''
}) => {
    const sizeClasses = {
        sm: 'w-3 h-3 text-xs',
        md: 'w-4 h-4 text-sm',
        lg: 'w-5 h-5 text-base'
    };

    const stars = [];
    for (let i = 1; i <= 5; i++) {
        const isFilled = i <= rating;
        const isHighlight = i === rating && rating >= 4;

        stars.push(
            <div
                key={i}
                className={`star ${isFilled ? 'filled' : ''} ${isHighlight ? 'highlight' : ''} ${sizeClasses[size]}`}
            />
        );
    }

    return (
        <div className={`star-rating ${className}`}>
            {stars}
            {showNumber && (
                <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    {rating}/5
                </span>
            )}
        </div>
    );
};

export default StarRating;
