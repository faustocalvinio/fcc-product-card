import { ProductCardHOCProps } from '../interfaces/products.interfaces';
import { ProductButtons } from './ProductButtons';
import { ProductCard  as ProductCardHOC} from './ProductCard';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductRating } from './ProductRating';
import { ProductBadge } from './ProductBadge';
import { ProductPrice } from './ProductPrice';

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';
export { ProductRating } from './ProductRating';
export { ProductBadge } from './ProductBadge';
export { ProductPrice } from './ProductPrice';


export const ProductCard:ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
    Rating: ProductRating,
    Badge: ProductBadge,
    Price: ProductPrice,
})

export default ProductCard;