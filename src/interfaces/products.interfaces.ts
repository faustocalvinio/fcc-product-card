import { Props as ProductCardProps } from '../components/ProductCard';
import { ProductImageProps } from '../components/ProductImage';
import { ProductTitleProps } from '../components/ProductTitle';
import { ProductButtonsProps } from '../components/ProductButtons';
import { ProductRatingProps } from '../components/ProductRating';
import { ProductBadgeProps } from '../components/ProductBadge';
import { ProductPriceProps } from '../components/ProductPrice';

export interface Product{
    id: string;
    title: string;
    img?: string;
    rating?: number;
    price?: number;
    originalPrice?: number;
}
export interface ProductCardHOCProps{
    ({children,product}:ProductCardProps): JSX.Element;
    Title: (Props:ProductTitleProps) => JSX.Element;
    Image: (Props:ProductImageProps) => JSX.Element;
    Buttons: (Props:ProductButtonsProps) => JSX.Element;
    Rating: (Props:ProductRatingProps) => JSX.Element;
    Badge: (Props:ProductBadgeProps) => JSX.Element;
    Price: (Props:ProductPriceProps) => JSX.Element;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value:number) => void;
    maxCount?: number;
    product: Product;
}

export interface  onChangeArgs{
    product: Product;
    count:   number;
} 

export interface ProductInCart extends Product {
    count: number;
}
export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;

    increaseBy: (value: number) => void;
    reset: () => void;
}