import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProductPrice } from './ProductPrice';
import { ProductCard } from './ProductCard';

const meta: Meta<typeof ProductPrice> = {
  title: 'Product Components/ProductPrice',
  component: ProductPrice,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    price: {
      control: 'number',
    },
    originalPrice: {
      control: 'number',
    },
    currency: {
      control: 'text',
    },
    layout: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    showDiscount: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleProduct = {
  id: '1',
  title: 'Sample Product',
  price: 24.99,
  originalPrice: 34.99,
};

// Wrapper component to provide ProductContext
const PriceWrapper = ({ children, product = sampleProduct }: any) => (
  <div style={{ background: '#1E2025', padding: '20px', borderRadius: '8px' }}>
    <ProductCard product={product} initialValues={{ count: 1 }}>
      {() => children}
    </ProductCard>
  </div>
);

export const RegularPrice: Story = {
  args: {
    price: 29.99,
    currency: '$',
    size: 'medium',
    layout: 'horizontal',
  },
  render: (args) => (
    <PriceWrapper product={{ id: '1', title: 'Product', price: 29.99 }}>
      <ProductPrice {...args} />
    </PriceWrapper>
  ),
};

export const SalePrice: Story = {
  args: {
    price: 24.99,
    originalPrice: 34.99,
    currency: '$',
    showDiscount: true,
    size: 'medium',
    layout: 'horizontal',
  },
  render: (args) => (
    <PriceWrapper>
      <ProductPrice {...args} />
    </PriceWrapper>
  ),
};

export const VerticalLayout: Story = {
  args: {
    price: 19.99,
    originalPrice: 29.99,
    currency: '$',
    showDiscount: true,
    size: 'medium',
    layout: 'vertical',
  },
  render: (args) => (
    <PriceWrapper>
      <ProductPrice {...args} />
    </PriceWrapper>
  ),
};

export const SmallSize: Story = {
  args: {
    price: 15.50,
    originalPrice: 22.00,
    currency: '$',
    showDiscount: true,
    size: 'small',
    layout: 'horizontal',
  },
  render: (args) => (
    <PriceWrapper>
      <ProductPrice {...args} />
    </PriceWrapper>
  ),
};

export const LargeSize: Story = {
  args: {
    price: 99.99,
    originalPrice: 149.99,
    currency: '$',
    showDiscount: true,
    size: 'large',
    layout: 'vertical',
  },
  render: (args) => (
    <PriceWrapper>
      <ProductPrice {...args} />
    </PriceWrapper>
  ),
};

export const EuroCurrency: Story = {
  args: {
    price: 39.90,
    originalPrice: 59.90,
    currency: '€',
    showDiscount: true,
    size: 'medium',
    layout: 'horizontal',
  },
  render: (args) => (
    <PriceWrapper>
      <ProductPrice {...args} />
    </PriceWrapper>
  ),
};

export const NoDiscount: Story = {
  args: {
    price: 45.00,
    currency: '$',
    showDiscount: false,
    size: 'medium',
    layout: 'horizontal',
  },
  render: (args) => (
    <PriceWrapper>
      <ProductPrice {...args} />
    </PriceWrapper>
  ),
};

export const BigDiscount: Story = {
  args: {
    price: 12.99,
    originalPrice: 49.99,
    currency: '$',
    showDiscount: true,
    size: 'large',
    layout: 'vertical',
  },
  render: (args) => (
    <PriceWrapper>
      <ProductPrice {...args} />
    </PriceWrapper>
  ),
};