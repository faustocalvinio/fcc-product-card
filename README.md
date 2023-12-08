# FCC Product Card

Este es un paquete de pruebas de despliegue en NPM.


#### Fausto C.

```bash
hello world
```

```tsx
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'fcc-product-card';
```



```tsx
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