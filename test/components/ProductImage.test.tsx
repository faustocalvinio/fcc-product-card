import React from "react";
import renderer from 'react-test-renderer';
import  { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('debe de mostrar el componente con imagen personalizada', () => {

    const wrapper = renderer.create(
        <ProductImage img="https://holafoto.com"/>
    )


    expect( wrapper.toJSON() ).toMatchSnapshot();
    

  });

  test('debe mostrar el componente con imagen del product', () => {
    const wrapper = renderer.create(
        <ProductCard  product={product2} >
            {
                ()=> (
                    <ProductImage />
                )
            }
        </ProductCard> 
    )
    expect( wrapper.toJSON() ).toMatchSnapshot();
  })
});
