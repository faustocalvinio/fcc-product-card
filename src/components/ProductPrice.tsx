import React from 'react';
import { CSSProperties, useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export interface ProductPriceProps {
    className?: string;
    style?: CSSProperties;
    price?: number;
    originalPrice?: number;
    currency?: string;
    showDiscount?: boolean;
    layout?: 'horizontal' | 'vertical';
    size?: 'small' | 'medium' | 'large';
}

export const ProductPrice = ({ 
    className, 
    style, 
    price,
    originalPrice,
    currency = '$',
    showDiscount = true,
    layout = 'horizontal',
    size = 'medium'
}: ProductPriceProps) => {
    const { product } = useContext(ProductContext);
    
    // Use provided prices or fallback to product prices
    const displayPrice = price !== undefined ? price : (product as any).price || 0;
    const displayOriginalPrice = originalPrice !== undefined ? originalPrice : (product as any).originalPrice;
    
    const formatPrice = (amount: number) => {
        return `${currency}${amount.toFixed(2)}`;
    };

    const calculateDiscount = () => {
        if (!displayOriginalPrice || displayOriginalPrice <= displayPrice) return 0;
        return Math.round(((displayOriginalPrice - displayPrice) / displayOriginalPrice) * 100);
    };

    const discount = calculateDiscount();
    const hasDiscount = discount > 0;

    return (
        <div 
            style={style} 
            className={`${styles.priceContainer} ${styles[`price${layout.charAt(0).toUpperCase() + layout.slice(1)}`]} ${styles[`price${size.charAt(0).toUpperCase() + size.slice(1)}`]} ${className || ''}`}
        >
            <div className={styles.priceGroup}>
                <span className={`${styles.currentPrice} ${hasDiscount ? styles.salePrice : ''}`}>
                    {formatPrice(displayPrice)}
                </span>
                
                {hasDiscount && displayOriginalPrice && (
                    <span className={styles.originalPrice}>
                        {formatPrice(displayOriginalPrice)}
                    </span>
                )}
            </div>
            
            {hasDiscount && showDiscount && (
                <span className={styles.discountPercent}>
                    Save {discount}%
                </span>
            )}
        </div>
    );
};