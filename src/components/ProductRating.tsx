import React from 'react';
import { CSSProperties, useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export interface ProductRatingProps {
    className?: string;
    style?: CSSProperties;
    rating?: number;
    maxRating?: number;
    showCount?: boolean;
    reviewCount?: number;
    size?: 'small' | 'medium' | 'large';
}

export const ProductRating = ({ 
    className, 
    style, 
    rating, 
    maxRating = 5, 
    showCount = false, 
    reviewCount = 0,
    size = 'medium'
}: ProductRatingProps) => {
    const { product } = useContext(ProductContext);
    
    // Use provided rating or fallback to product rating or default
    const displayRating = rating !== undefined ? rating : (product as any).rating || 0;
    
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= maxRating; i++) {
            const filled = i <= displayRating;
            const halfFilled = i - 0.5 === displayRating;
            
            stars.push(
                <span
                    key={i}
                    className={`${styles.star} ${filled ? styles.starFilled : halfFilled ? styles.starHalf : styles.starEmpty} ${styles[`star${size.charAt(0).toUpperCase() + size.slice(1)}`]}`}
                >
                    ★
                </span>
            );
        }
        return stars;
    };

    return (
        <div 
            style={style} 
            className={`${styles.ratingContainer} ${className || ''}`}
        >
            <div className={styles.starsContainer}>
                {renderStars()}
            </div>
            {showCount && (
                <span className={styles.reviewCount}>
                    ({reviewCount} {reviewCount === 1 ? 'review' : 'reviews'})
                </span>
            )}
        </div>
    );
};