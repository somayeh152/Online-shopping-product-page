'use client';
import ProductDetail from '../components/ProductDetail';
import Reviews from '../components/Reviews';
import { ProductProvider } from '../context/ProductContext';

export default function Home() {
  return (
      <ProductProvider>
        <main className="max-w-6xl mx-auto">
          <ProductDetail />
          <Reviews />
        </main>
      </ProductProvider>
  );
}
