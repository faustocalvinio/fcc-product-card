import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProductRating } from './ProductRating';
import { ProductCard } from './ProductCard';

const meta: Meta<typeof ProductRating> = {
  title: 'Product Components/ProductRating',
  component: ProductRating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    rating: {
      control: { type: 'range', min: 0, max: 5, step: 0.5 },
    },
    maxRating: {
      control: { type: 'range', min: 3, max: 10, step: 1 },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    showCount: {
      control: 'boolean',
    },
    reviewCount: {
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleProduct = {
  id: '1',
  title: 'Sample Product',
  rating: 4.5,
};

// Wrapper component to provide ProductContext
const RatingWrapper = ({ children, product = sampleProduct }: any) => (
  <ProductCard product={product} initialValues={{ count: 1 }}>
    {() => children}
  </ProductCard>
);

export const Default: Story = {
  args: {
    rating: 4.5,
    maxRating: 5,
    size: 'medium',
  },
  render: (args) => (
    <RatingWrapper>
      <ProductRating {...args} />
    </RatingWrapper>
  ),
};

export const WithReviewCount: Story = {
  args: {
    rating: 4,
    showCount: true,
    reviewCount: 127,
    size: 'medium',
  },
  render: (args) => (
    <RatingWrapper>
      <ProductRating {...args} />
    </RatingWrapper>
  ),
};

export const SmallSize: Story = {
  args: {
    rating: 3.5,
    size: 'small',
    showCount: true,
    reviewCount: 23,
  },
  render: (args) => (
    <RatingWrapper>
      <ProductRating {...args} />
    </RatingWrapper>
  ),
};

export const LargeSize: Story = {
  args: {
    rating: 5,
    size: 'large',
    showCount: true,
    reviewCount: 1843,
  },
  render: (args) => (
    <RatingWrapper>
      <ProductRating {...args} />
    </RatingWrapper>
  ),
};

export const NoRating: Story = {
  args: {
    rating: 0,
    showCount: true,
    reviewCount: 0,
    size: 'medium',
  },
  render: (args) => (
    <RatingWrapper>
      <ProductRating {...args} />
    </RatingWrapper>
  ),
};

export const CustomMaxRating: Story = {
  args: {
    rating: 7,
    maxRating: 10,
    showCount: true,
    reviewCount: 456,
    size: 'medium',
  },
  render: (args) => (
    <RatingWrapper>
      <ProductRating {...args} />
    </RatingWrapper>
  ),
};