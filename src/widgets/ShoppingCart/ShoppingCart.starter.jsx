import { useState } from 'react';

/**
 * Shopping Cart Widget - STARTER VERSION
 *
 * Learning Objectives:
 * - Manage cart items with quantities
 * - Calculate totals and subtotals
 * - Update quantities dynamically
 * - Work with arrays of objects with numeric properties
 *
 * TODO: Complete the missing parts marked with comments
 */
function ShoppingCart() {
  const availableProducts = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Mouse', price: 29.99 },
    { id: 3, name: 'Keyboard', price: 79.99 },
    { id: 4, name: 'Monitor', price: 299.99 },
  ];

  // TODO: Initialize state for cart items (array of objects)
  // Each item should have: { id, name, price, quantity }


  // Add item to cart
  const handleAddToCart = (product) => {
    // TODO: Check if item already exists in cart using .find()
    const existingItem = null;

    if (existingItem) {
      // TODO: Item already in cart, increase quantity by 1
      // Hint: Map through cartItems and update the quantity for matching id

    } else {
      // TODO: New item, add to cart with quantity: 1
      // Hint: Spread the product object and add quantity property

    }
  };

  // Update item quantity
  const handleUpdateQuantity = (id, newQuantity) => {
    // TODO: If newQuantity < 1, remove the item instead


    // TODO: Update the quantity for the item with matching id
    // Hint: Map through cartItems and update quantity

  };

  // Remove item from cart
  const handleRemoveItem = (id) => {
    // TODO: Filter out the item with the given id

  };

  // Clear cart
  const handleClearCart = () => {
    // TODO: Set cartItems to empty array

  };

  // TODO: Calculate total using reduce
  // Multiply each item's price by quantity and sum them up
  const total = 0;

  // TODO: Calculate itemCount using reduce
  // Sum up all quantities
  const itemCount = 0;

  return (
    <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-2xl">
      <h3 className="text-2xl font-bold text-gray-800">Shopping Cart</h3>

      {/* Available Products */}
      <div className="w-full">
        <h4 className="font-semibold text-gray-700 mb-3">Available Products</h4>
        <div className="grid grid-cols-2 gap-3">
          {availableProducts.map(product => (
            <div key={product.id} className="p-4 border-2 border-gray-300 rounded-lg">
              <div className="font-semibold text-gray-800">{product.name}</div>
              <div className="text-green-600 font-bold">${product.price.toFixed(2)}</div>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-2 w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Items */}
      <div className="w-full">
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-semibold text-gray-700">
            Cart ({itemCount} {itemCount === 1 ? 'item' : 'items'})
          </h4>
          {cartItems.length > 0 && (
            <button
              onClick={handleClearCart}
              className="text-sm text-red-600 hover:text-red-700 font-medium"
            >
              Clear Cart
            </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          <div className="p-8 text-center text-gray-400 border-2 border-dashed border-gray-300 rounded-lg">
            Your cart is empty
          </div>
        ) : (
          <div className="space-y-3">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center gap-3 p-4 bg-white border-2 border-gray-300 rounded-lg">
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">{item.name}</div>
                  <div className="text-sm text-gray-600">${item.price.toFixed(2)} each</div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded font-bold"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded font-bold"
                  >
                    +
                  </button>
                </div>

                <div className="w-24 text-right font-bold text-gray-800">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Total */}
      {cartItems.length > 0 && (
        <div className="w-full p-4 bg-blue-50 border-2 border-blue-500 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold text-gray-800">Total:</span>
            <span className="text-2xl font-bold text-blue-600">${total.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
