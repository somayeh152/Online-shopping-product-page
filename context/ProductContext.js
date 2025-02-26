import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [product, setProduct] = useState({
        name: 'Stylish leather bag',
        price: '89.99',
        description: 'Carry all your essentials with you in this leather bag',
        images: ['/product-images/image1.jpg'],
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Green', 'Red', 'Blue', 'Black'],
        reviews: [
            { id: uuidv4(), name: 'Alice', text: 'Great product!', rating: 5 },
            { id: uuidv4(), name: 'Anna', text: 'Very comfortable.', rating: 4 },
        ],
        averageRating: null,
    });

    const [selectedOptions, setSelectedOptions] = useState({ size: 'M', color: 'Green' });

    useEffect(() => {
        const ratings = product.reviews.map((review) => review.rating);
        const averageRating = ratings.length ? (ratings.reduce((a, b) => a + b) / ratings.length).toFixed(1) : 0;
        setProduct((prev) => ({ ...prev, averageRating }));
    }, [product.reviews]);

    const addReview = (name, text, rating) => {
        if (name && text && rating) {
            setProduct((prev) => ({
                ...prev,
                reviews: [...prev.reviews, { id: uuidv4(), name, text, rating }],
            }));
        }
    };

    return (
        <ProductContext.Provider value={{ product, selectedOptions, setSelectedOptions, addReview }}>
            {children}
        </ProductContext.Provider>
    );
}