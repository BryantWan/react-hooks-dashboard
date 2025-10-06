# Filter Panel - Widget Specification

## User Story

As a user, I want to filter a list of products using multiple criteria including category, price range, stock status, and search term.

## Acceptance Criteria

1. **Initial Display**
   - Show all 8 products by default
   - Display product name, category, price, and stock status

2. **Search Filter**
   - Text input for searching product names
   - Case-insensitive search
   - Updates results in real-time as user types

3. **Category Filter**
   - Dropdown with options: All, Clothing, Home, Electronics, Stationery
   - Default: All
   - Filters products by selected category

4. **Price Range Filter**
   - Dropdown with options: All, Under $20, $20-$50, Over $50
   - Default: All
   - Filters products by price range

5. **Stock Filter**
   - Checkbox: "In Stock Only"
   - Default: unchecked (show all)
   - When checked, only show in-stock products

6. **Combined Filtering**
   - All filters work together (AND logic)
   - Product must match ALL active filters to appear
   - Filters update results immediately

7. **Results Display**
   - Show count: "Showing X of Y products"
   - Display products in grid layout
   - Each product shows:
     - Name
     - Category
     - Price
     - Stock status badge (green=in stock, red=out of stock)

8. **Empty State**
   - When no products match filters, show message
   - "No products match your filters"

9. **Clear Filters**
   - "Clear All Filters" button
   - Resets all filters to default
   - Shows all products again

10. **Filter UI**
    - All filters in a panel at top
    - Clear visual grouping
    - Responsive layout
