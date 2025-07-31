import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard, ProductImage, ProductTitle, ProductButtons, ProductRating, ProductBadge, ProductPrice } from '../components';

const meta: Meta<typeof ProductCard> = {
  title: 'Product Components/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    product: {
      control: 'object',
    },
    initialValues: {
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleProduct = {
  id: '1',
  title: 'Premium Coffee Mug',
  img: 'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=250&h=200&fit=crop',
  rating: 4.5,
  price: 24.99,
  originalPrice: 34.99,
};

export const Default: Story = {
  args: {
    product: sampleProduct,
    initialValues: {
      count: 1,
      maxCount: 10,
    },
  },
  render: (args) => (
    <ProductCard {...args}>
      {() => (
        <>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </>
      )}
    </ProductCard>
  ),
};

export const WithRating: Story = {
  args: {
    product: sampleProduct,
    initialValues: {
      count: 1,
      maxCount: 10,
    },
  },
  render: (args) => (
    <ProductCard {...args}>
      {() => (
        <>
          <ProductImage />
          <ProductTitle />
          <ProductRating showCount={true} reviewCount={127} />
          <ProductButtons />
        </>
      )}
    </ProductCard>
  ),
};

export const WithBadgeAndPrice: Story = {
  args: {
    product: sampleProduct,
    initialValues: {
      count: 1,
      maxCount: 10,
    },
  },
  render: (args) => (
    <div style={{ position: 'relative' }}>
      <ProductCard {...args}>
        {() => (
          <>
            <ProductBadge type="sale" discount={29} />
            <ProductImage />
            <ProductTitle />
            <ProductPrice showDiscount={true} />
            <ProductRating showCount={true} reviewCount={127} />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  ),
};

export const CompleteProductCard: Story = {
  args: {
    product: sampleProduct,
    initialValues: {
      count: 3,
      maxCount: 15,
    },
  },
  render: (args) => (
    <div style={{ position: 'relative' }}>
      <ProductCard {...args}>
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
  ),
};