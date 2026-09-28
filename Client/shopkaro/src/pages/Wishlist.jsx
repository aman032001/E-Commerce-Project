import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Card from '../components/Card';

export default function Wishlist() {
    const { wishlist } = useContext(ShopContext);

    return (
        <div className="container" style={{ padding: '4rem 0', minHeight: '60vh' }}>
            <h1 className="page-title">Your Wishlist</h1>
            
            {wishlist.length === 0 ? (
                <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
                    Your wishlist is currently empty.
                </div>
            ) : (
                <div className="product-grid">
                    {wishlist.map(product => (
                        <Card key={product.id} data1={product} />
                    ))}
                </div>
            )}
        </div>
    );
}
