import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProductBadge } from './ProductBadge';
import { ProductCard } from './ProductCard';

const meta: Meta<typeof ProductBadge> = {
  title: 'Product Components/ProductBadge',
  component: ProductBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['sale', 'new', 'bestseller', 'limited', 'hot', 'discount'],
    },
    position: {
      control: { type: 'select' },
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
    },
    text: {
      control: 'text',
    },
    discount: {
      control: { type: 'range', min: 5, max: 75, step: 5 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleProduct = {
  id: '1',
  title: 'Sample Product',
};

// Wrapper component to provide ProductContext and relative positioning
const BadgeWrapper = ({ children, product = sampleProduct }: any) => (
  <div style={{ position: 'relative', width: '200px', height: '200px', background: '#f0f0f0', border: '1px solid #ccc', borderRadius: '8px' }}>
    <ProductCard product={product} initialValues={{ count: 1 }}>
      {() => children}
    </ProductCard>
  </div>
);

export const SaleBadge: Story = {
  args: {
    type: 'sale',
    position: 'top-right',
    discount: 25,
  },
  render: (args) => (
    <BadgeWrapper>
      <ProductBadge {...args} />
    </BadgeWrapper>
  ),
};

export const NewBadge: Story = {
  args: {
    type: 'new',
    position: 'top-left',
  },
  render: (args) => (
    <BadgeWrapper>
      <ProductBadge {...args} />
    </BadgeWrapper>
  ),
};

export const BestsellerBadge: Story = {
  args: {
    type: 'bestseller',
    position: 'top-right',
  },
  render: (args) => (
    <BadgeWrapper>
      <ProductBadge {...args} />
    </BadgeWrapper>
  ),
};

export const LimitedBadge: Story = {
  args: {
    type: 'limited',
    position: 'bottom-left',
  },
  render: (args) => (
    <BadgeWrapper>
      <ProductBadge {...args} />
    </BadgeWrapper>
  ),
};

export const HotBadge: Story = {
  args: {
    type: 'hot',
    position: 'bottom-right',
  },
  render: (args) => (
    <BadgeWrapper>
      <ProductBadge {...args} />
    </BadgeWrapper>
  ),
};

export const CustomTextBadge: Story = {
  args: {
    type: 'sale',
    text: 'CUSTOM',
    position: 'top-right',
  },
  render: (args) => (
    <BadgeWrapper>
      <ProductBadge {...args} />
    </BadgeWrapper>
  ),
};

export const DiscountBadge: Story = {
  args: {
    type: 'discount',
    discount: 50,
    position: 'top-left',
  },
  render: (args) => (
    <BadgeWrapper>
      <ProductBadge {...args} />
    </BadgeWrapper>
  ),
};

export const AllPositions: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
      <BadgeWrapper>
        <ProductBadge type="sale" position="top-left" discount={15} />
      </BadgeWrapper>
      <BadgeWrapper>
        <ProductBadge type="new" position="top-right" />
      </BadgeWrapper>
      <BadgeWrapper>
        <ProductBadge type="hot" position="bottom-left" />
      </BadgeWrapper>
      <BadgeWrapper>
        <ProductBadge type="bestseller" position="bottom-right" />
      </BadgeWrapper>
    </div>
  ),
};