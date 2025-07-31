# FCC Product Card

Este es un paquete de pruebas de despliegue en NPM con componentes para tarjetas de productos.

## Components

### ProductCard
Container principal que incluye context y funcionalidad de contador.

### ProductImage
Componente para mostrar imágenes de productos con fallback.

### ProductTitle  
Componente para mostrar el título del producto.

### ProductButtons
Botones de incremento/decremento con validación de máximo.

### ProductRating ⭐ NEW
Componente de calificación con estrellas que incluye:
- Calificación de 1-5 estrellas (configurable)
- Soporte para medias estrellas
- Contador de reseñas opcional
- Tres tamaños: small, medium, large

### ProductBadge 🏷️ NEW  
Componente de insignias/etiquetas que incluye:
- Múltiples tipos: sale, new, bestseller, limited, hot, discount
- Posicionamiento en esquinas: top-left, top-right, bottom-left, bottom-right
- Emojis y gradientes de colores
- Texto personalizable y porcentajes de descuento

### ProductPrice 💰 NEW
Componente de precios que incluye:
- Precio actual y precio original tachado
- Cálculo automático de descuento
- Indicador de porcentaje ahorrado
- Layouts horizontal y vertical
- Múltiples monedas
- Tres tamaños de texto

## Uso Básico

```tsx
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'fcc-product-card';

<ProductCard                          
    product={ product }                           
    initialValues={{
        count: 6,
        maxCount: 15,
    }}                          
>
    {
        ( args ) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />                                       
            </>
        )
    }
</ProductCard>   
```

## Uso Avanzado con Nuevos Componentes

```tsx
import {
    ProductCard, ProductImage, ProductTitle, ProductButtons,
    ProductRating, ProductBadge, ProductPrice
} from 'fcc-product-card';

const product = {
    id: '1',
    title: 'Premium Coffee Mug',
    img: 'https://example.com/mug.jpg',
    rating: 4.5,
    price: 24.99,
    originalPrice: 34.99
};

<div style={{ position: 'relative' }}>
    <ProductCard product={product} initialValues={{ count: 1, maxCount: 10 }}>
        {() => (
            <>
                <ProductBadge type="bestseller" />
                <ProductImage />
                <ProductTitle />
                <ProductPrice showDiscount={true} layout="vertical" />
                <ProductRating showCount={true} reviewCount={247} size="medium" />
                <ProductButtons />
            </>
        )}
    </ProductCard>
</div>
```

## Storybook

Este proyecto incluye Storybook para la documentación interactiva de componentes:

```bash
npm run storybook
```

Visita http://localhost:6006 para explorar todos los componentes y sus variaciones.

#### Fausto C.