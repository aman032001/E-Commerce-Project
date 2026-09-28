import React, { useState, useMemo } from 'react';
import Card from './Card';

export default function FilterSortGrid({ products }) {
    const [sortMethod, setSortMethod] = useState(''); // 'price-asc', 'price-desc', 'rating'
    const [priceRange, setPriceRange] = useState(''); // 'under-50', '50-100', 'over-100'

    const filteredAndSortedProducts = useMemo(() => {
        let result = [...products];

        // Apply Price Filter
        if (priceRange === 'under-50') {
            result = result.filter(p => p.price < 50);
        } else if (priceRange === '50-100') {
            result = result.filter(p => p.price >= 50 && p.price <= 100);
        } else if (priceRange === 'over-100') {
            result = result.filter(p => p.price > 100);
        }

        // Apply Sorting
        if (sortMethod === 'price-asc') {
            result.sort((a, b) => a.price - b.price);
        } else if (sortMethod === 'price-desc') {
            result.sort((a, b) => b.price - a.price);
        } else if (sortMethod === 'rating') {
            result.sort((a, b) => b.rating - a.rating);
        }

        return result;
    }, [products, sortMethod, priceRange]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Top Toolbar Controls */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', padding: '1rem 1.5rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <h3 style={{ fontSize: '1.1rem', margin: 0, paddingRight: '1rem', borderRight: '1px solid var(--border)' }}>Filters</h3>
                    
                    {/* Filter By Price */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Price Range:</span>
                        <select 
                            value={priceRange} 
                            onChange={e => setPriceRange(e.target.value)}
                            style={{ padding: '0.5rem 1rem', borderRadius: '50px', border: '1px solid var(--border)', backgroundColor: 'var(--background)', color: 'var(--text-main)', fontSize: '0.9rem', outline: 'none', cursor: 'pointer' }}
                        >
                            <option value="">All Prices</option>
                            <option value="under-50">Under $50</option>
                            <option value="50-100">$50 to $100</option>
                            <option value="over-100">Over $100</option>
                        </select>
                    </div>
                </div>

                {/* Sort By */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Sort By:</span>
                    <select 
                        value={sortMethod} 
                        onChange={e => setSortMethod(e.target.value)}
                        style={{ padding: '0.5rem 1rem', borderRadius: '50px', border: '1px solid var(--border)', backgroundColor: 'var(--background)', color: 'var(--text-main)', fontSize: '0.9rem', outline: 'none', cursor: 'pointer' }}
                    >
                        <option value="">Recommended</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="rating">Top Rated</option>
                    </select>
                </div>
            </div>

            {/* Product Grid */}
            <div style={{ width: '100%' }}>
                {filteredAndSortedProducts.length > 0 ? (
                    <div className="product-grid" style={{ padding: 0 }}>
                        {filteredAndSortedProducts.map(product => (
                            <Card key={product.id} data1={product} />
                        ))}
                    </div>
                ) : (
                    <div style={{ padding: '4rem', textAlign: 'center', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
                        <h3 style={{ marginBottom: '0.5rem' }}>No products found</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Try adjusting your filters to find what you're looking for.</p>
                        <button 
                            onClick={() => { setSortMethod(''); setPriceRange(''); }} 
                            style={{ marginTop: '1.5rem', padding: '0.5rem 1.5rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '50px', cursor: 'pointer' }}
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>
            
        </div>
    );
}
