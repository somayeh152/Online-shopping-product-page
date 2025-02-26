# Online-shopping-product-page
A responsive project built with Next.js, Context API, Tailwind css

This project is a responsive product page built with React and Next.js showcasing interactive product details, option selections, reviews, and ratings. Styled with Tailwind CSS for a modern, responsive UI


--- ProductDetail.jsx file:
Displays the product's images, price, description, and average rating. Reacts to changes in size and color selections from `OptionsSelector` and shows the updated product variant.


--- OptionsSelector.jsx file:
Provides dropdowns for selecting size and color. On selection change, product variant updates dynamically. 


--- Reviews.jsx file:
Handles both displaying and submitting reviews.
- Lists all reviews with name, rating, and text.  
- Allows users to submit a new review.


--- ProductContext.js file:
Centralized state management using React’s Context API:  
- Stores product details, selected options, and reviews.  
- Provides functions like addReview to components.  
- Average rating updates automatically in "ProductDetail".  
- Ensures seamless data flow across the app. 	



