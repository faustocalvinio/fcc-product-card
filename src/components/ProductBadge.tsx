import React from 'react';
import { CSSProperties } from 'react';
import styles from '../styles/styles.module.css';

export interface ProductBadgeProps {
    className?: string;
    style?: CSSProperties;
    type?: 'sale' | 'new' | 'bestseller' | 'limited' | 'hot' | 'discount';
    text?: string;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    discount?: number;
}

export const ProductBadge = ({ 
    className, 
    style, 
    type = 'sale', 
    text,
    position = 'top-right',
    discount
}: ProductBadgeProps) => {
    const getBadgeText = () => {
        if (text) return text;
        
        switch (type) {
            case 'sale':
                return discount ? `-${discount}%` : 'SALE';
            case 'new':
                return 'NEW';
            case 'bestseller':
                return 'BESTSELLER';
            case 'limited':
                return 'LIMITED';
            case 'hot':
                return 'HOT';
            case 'discount':
                return discount ? `-${discount}%` : 'DISCOUNT';
            default:
                return 'SALE';
        }
    };

    const getBadgeEmoji = () => {
        switch (type) {
            case 'sale':
            case 'discount':
                return '🏷️';
            case 'new':
                return '✨';
            case 'bestseller':
                return '👑';
            case 'limited':
                return '⏰';
            case 'hot':
                return '🔥';
            default:
                return '🏷️';
        }
    };

    return (
        <div 
            style={style} 
            className={`${styles.badge} ${styles[`badge${type.charAt(0).toUpperCase() + type.slice(1)}`]} ${styles[`badge${position.charAt(0).toUpperCase() + position.slice(1).replace('-', '')}`]} ${className || ''}`}
        >
            <span className={styles.badgeEmoji}>{getBadgeEmoji()}</span>
            <span className={styles.badgeText}>{getBadgeText()}</span>
        </div>
    );
};