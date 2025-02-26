import { useContext } from 'react';
import OptionsSelector from './OptionsSelector';
import { ProductContext } from '../context/ProductContext';

export default function ProductDetail() {
    const { product } = useContext(ProductContext);

    return (
        <div className="flex p-6 bg-white rounded-2xl shadow-xl mt-6">
            <img src={product.images[0]} alt={product.name} className="rounded-2xl max-w-60 max-h-60 "/>
            <div className="ml-12">
                <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
                <p className="text-lg font-medium mb-2">Rate: ⭐ {product.averageRating}</p>
                <p className="text-lg text-gray-700 mb-2">${product.price}</p>
                <p className="text-gray-600">{product.description}</p>
                <OptionsSelector/>
            </div>
        </div>
    );
}