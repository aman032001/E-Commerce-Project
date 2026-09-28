import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../components/Card';

export default function Search() {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q');
    
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchSearchResults() {
            setLoading(true);
            try {
                let res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
                let data = await res.json();
                setResults(data.products || []);
            } catch (err) {
                console.error("Search failed:", err);
            } finally {
                setLoading(false);
            }
        }
        if (query) {
            fetchSearchResults();
        } else {
            setLoading(false);
        }
    }, [query]);

    return (
        <div className="container" style={{ padding: '4rem 0', minHeight: '60vh' }}>
            <h1 className="page-title">Search Results for "{query}"</h1>
            
            {loading ? (
                <div style={{ textAlign: 'center' }}>Searching...</div>
            ) : results.length > 0 ? (
                <div className="product-grid">
                    {results.map((product) => (
                        <Card key={product.id} data1={product} />
                    ))}
                </div>
            ) : (
                <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
                    No products found matching your search.
                </div>
            )}
        </div>
    );
}
