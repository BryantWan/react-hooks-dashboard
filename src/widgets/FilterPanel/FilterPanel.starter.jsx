import { useState } from 'react';

/**
 * Filter Panel Widget - STARTER VERSION
 *
 * Learning Objectives:
 * - Manage multiple filter states
 * - Filter arrays based on multiple criteria
 * - Combine filter conditions
 * - Display filtered results
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

  // TODO: Initialize state for selectedCategory (start with 'All')


  // TODO: Initialize state for priceRange (start with 'All')


  // TODO: Initialize state for showInStockOnly (start with false)


  // TODO: Initialize state for searchTerm (start with empty string)


  // Filter products based on all criteria
  const filteredProducts = allProducts.filter(product => {
    // TODO: Implement category filter
    // If selectedCategory is not 'All' and doesn't match product.category, return false


    // TODO: Implement price filter
    // Check priceRange and filter based on product.price


    // TODO: Implement stock filter
    // If showInStockOnly is true and product.inStock is false, return false


    // TODO: Implement search filter
    // If searchTerm exists and product.name doesn't include it (case-insensitive), return false


    return true;
  });

  const handleClearFilters = () => {
    // TODO: Reset all filters to initial values


  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 w-full max-w-3xl">
      <h3 className="text-2xl font-bold text-gray-800">Product Filter</h3>

      {/* Filters */}
      <div className="w-full p-4 bg-gray-50 rounded-lg space-y-4">
        {/* Search */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Search
          </label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="All">All</option>
              <option value="Clothing">Clothing</option>
              <option value="Home">Home</option>
              <option value="Electronics">Electronics</option>
              <option value="Stationery">Stationery</option>
            </select>
          </div>

          {/* Price Range Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price Range
            </label>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="All">All</option>
              <option value="Under $20">Under $20</option>
              <option value="$20-$50">$20-$50</option>
              <option value="Over $50">Over $50</option>
            </select>
          </div>

          {/* Stock Filter */}
          <div className="flex items-end">
            <label className="flex items-center space-x-2 cursor-pointer px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-100">
              <input
                type="checkbox"
                checked={showInStockOnly}
                onChange={(e) => setShowInStockOnly(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded"
              />
              <span className="text-sm font-medium text-gray-700">In Stock Only</span>
            </label>
          </div>
        </div>

        {/* Clear Filters Button */}
        <button
          onClick={handleClearFilters}
          className="w-full px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
        >
          Clear All Filters
        </button>
      </div>

      {/* Results */}
      <div className="w-full">
        <div className="mb-3 text-gray-600">
          Showing {filteredProducts.length} of {allProducts.length} products
        </div>

        {filteredProducts.length === 0 ? (
          <div className="p-8 text-center text-gray-400 border-2 border-dashed border-gray-300 rounded-lg">
            No products match your filters
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {filteredProducts.map(product => (
              <div key={product.id} className="p-4 border-2 border-gray-300 rounded-lg">
                <div className="font-semibold text-gray-800">{product.name}</div>
                <div className="text-sm text-gray-600">{product.category}</div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-green-600 font-bold">${product.price}</span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    product.inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterPanel;
