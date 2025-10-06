import { useState } from 'react';

/**
 * Shopping Cart Widget - TEMPLATE VERSION
 *
 * Learning Objectives:
 * - Manage cart items with quantities
 * - Calculate totals and subtotals
 * - Update quantities dynamically
 * - Work with arrays of objects with numeric properties
 *
 * Instructions:
 * 1. Create state for cart items (array of objects with id, name, price, quantity)
 * 2. Implement add to cart (check if item exists, update quantity or add new)
 * 3. Implement quantity update (increase/decrease)
 * 4. Implement remove item
 * 5. Calculate total price and item count
 * 6. Display products, cart items, and total
 */
function ShoppingCart() {
  const availableProducts = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Mouse', price: 29.99 },
    { id: 3, name: 'Keyboard', price: 79.99 },
    { id: 4, name: 'Monitor', price: 299.99 },
  ];

  // TODO: Create state for cart items

  // TODO: Create function to add item to cart
  // Check if item already exists
  // If exists, increase quantity
  // If new, add with quantity 1

  // TODO: Create function to update quantity
  // If quantity < 1, remove item
  // Otherwise, update quantity

  // TODO: Create function to remove item

  // TODO: Create function to clear cart

  // TODO: Calculate total and item count using reduce

  return (
    <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-2xl">
      <h3 className="text-2xl font-bold text-gray-800">Shopping Cart</h3>

      {/* TODO: Display available products */}
      {/* Grid of products with Add to Cart buttons */}

      {/* TODO: Display cart items */}
      {/* Show empty state if no items */}
      {/* Otherwise show each item with quantity controls */}

      {/* TODO: Display total */}
      {/* Only show if cart has items */}
    </div>
  );
}

export default ShoppingCart;
