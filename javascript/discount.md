A shopping site offers a discount of {discount}% off the regular price of the most expensive item in the cart.

For example, if the regular price of the most expensive item in the cart is $100, and the discount is 20%, the price of the item will be $80 plus the rest of the price of the cart.

Write a function to calculate the discounted price of a shopping cart.

Example 1:

Input: price = [100,200,300], discount = 20
Output: 540
Explanation: The discount is 20%, so the price of the most expensive item in the cart is 300 and the price of the item after the discount is 100 + 300 * 20% = 540.

Example 2:

Input: price = [100,200,300], discount = 50
Output: 450
Explanation: The discount is 50%, so the price of the most expensive item in the cart is 300 and the price of the item after the discount is 100 + 200 + 300 * 50% = 450.

Notes: 
  - The length of the price array will be in the range of 1 to 10000.
  - The price array contains only positive integers.
  - The total price must be rounded down to the nearest two decimal places.
  - The prices list length is always in the range of 1 to 10000.