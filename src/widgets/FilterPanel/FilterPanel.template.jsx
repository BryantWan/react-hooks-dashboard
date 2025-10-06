import { useState } from 'react';

/**
 * Filter Panel Widget - TEMPLATE VERSION
 *
 * Learning Objectives:
 * - Manage multiple filter states
 * - Filter arrays based on multiple criteria
 * - Combine filter conditions
 * - Display filtered results
 *
 * Instructions:
 * 1. Create state for each filter (category, price range, stock, search)
 * 2. Implement filtering logic combining all criteria
 * 3. Display filtered results
 * 4. Show count of filtered vs total products
 * 5. Implement clear all filters functionality
 */
function FilterPanel() {
  const allProducts = [
    { id: 1, name: 'Red T-Shirt', category: 'Clothing', price: 25, inStock: true },
    { id: 2, name: 'Blue Jeans', category: 'Clothing', price: 60, inStock: true },
    { id: 3, name: 'Coffee Mug', category: 'Home', price: 12, inStock: false },
    { id: 4, name: 'Desk Lamp', category: 'Home', price: 45, inStock: true },
    { id: 5, name: 'Laptop Stand', category: 'Electronics', price: 80, inStock: true },
    { id: 6, name: 'Wireless Mouse', category: 'Electronics', price: 35, inStock: false },
    { id: 7, name: 'Notebook', category: 'Stationery', price: 8, inStock: true },
    { id: 8, name: 'Pen Set', category: 'Stationery', price: 15, inStock: true },
  ];

  // TODO: Create state for each filter
  // - selectedCategory (default: 'All')
  // - priceRange (default: 'All')
  // - showInStockOnly (default: false)
  // - searchTerm (default: '')

  // TODO: Filter products based on all criteria
  // Use filter() and check each condition

  // TODO: Create function to clear all filters

  return (
    <div className="flex flex-col items-center justify-center space-y-4 w-full max-w-3xl">
      <h3 className="text-2xl font-bold text-gray-800">Product Filter</h3>

      {/* TODO: Create filter controls */}
      {/* Search input, Category select, Price range select, Stock checkbox */}

      {/* TODO: Display filtered results */}
      {/* Show count of results */}
      {/* Show products in grid or empty state */}
    </div>
  );
}

export default FilterPanel;
