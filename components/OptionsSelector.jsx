import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

export default function OptionsSelector() {
    const { selectedOptions, setSelectedOptions, product } = useContext(ProductContext);

    return (
        <div className="my-4 flex items-end">
            <di className="mr-2">
                <label className="block mb-2">Size:</label>
                <select
                    className="p-2 rounded border"
                    value={selectedOptions.size}
                    onChange={(e) => setSelectedOptions({...selectedOptions, size: e.target.value})}
                >
                    {product.sizes.map((size) => (
                        <option key={size}>{size}</option>
                    ))}
                </select>
            </di>
            <div className="mr-2">
                <label className="block mt-4 mb-2">Color:</label>
                <select
                    className="p-2 rounded border"
                    value={selectedOptions.color}
                    onChange={(e) => setSelectedOptions({...selectedOptions, color: e.target.value})}
                >
                    {product.colors.map((color) => (
                        <option key={color}>{color}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}