# Shopping Cart - Widget Specification

## User Story

As a user, I want to add products to a shopping cart, adjust quantities, remove items, and see the total price update automatically.

## Acceptance Criteria

1. **Available Products**
   - Display 4 products: Laptop, Mouse, Keyboard, Monitor
   - Each product shows name and price
   - Each product has "Add to Cart" button

2. **Add to Cart**
   - Clicking "Add to Cart" adds product to cart
   - If product already in cart, increase quantity by 1
   - If product not in cart, add with quantity 1

3. **Cart Display**
   - Show count of total items in cart
   - Each cart item displays:
     - Product name
     - Unit price
     - Quantity with +/- controls
     - Subtotal (price × quantity)
     - Remove button

4. **Quantity Controls**
   - Plus button increases quantity by 1
   - Minus button decreases quantity by 1
   - If quantity reaches 0, item is removed from cart
   - Subtotal updates immediately

5. **Remove Item**
   - Each item has a delete/trash button
   - Clicking removes item from cart immediately
   - Cart updates to reflect removal

6. **Clear Cart**
   - "Clear Cart" button appears when cart has items
   - Clicking removes all items from cart
   - Returns to empty state

7. **Empty State**
   - When cart is empty, show "Your cart is empty" message
   - Empty state has dashed border

8. **Total Calculation**
   - Total appears at bottom of cart
   - Automatically calculates sum of all subtotals
   - Displays in large, prominent text
   - Only shows when cart has items
   - Format: $XXX.XX (two decimal places)

9. **Item Count**
   - Show total number of items (sum of all quantities)
   - Updates in real-time
   - Display: "Cart (X items)" or "Cart (1 item)"

10. **Price Formatting**
    - All prices show 2 decimal places
    - Dollar sign prefix
