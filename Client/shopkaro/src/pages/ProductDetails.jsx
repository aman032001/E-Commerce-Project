import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

export default function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useContext(ShopContext);
    
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [mainImage, setMainImage] = useState('');

    useEffect(() => {
        async function fetchProduct() {
            try {
                let res = await fetch(`https://dummyjson.com/products/${id}`);
                let data = await res.json();
                setProduct(data);
                setMainImage(data.thumbnail || data.images[0]);
            } catch (error) {
                console.error("Failed to fetch product:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchProduct();
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) return <div style={{ textAlign: 'center', padding: '4rem' }}>Loading product details...</div>;
    if (!product) return <div style={{ textAlign: 'center', padding: '4rem' }}>Product not found.</div>;

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <button 
                onClick={() => navigate(-1)} 
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}
            >
                &larr; Back to shopping
            </button>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem' }}>
                {/* Image Gallery */}
                <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ width: '100%', aspectRatio: '1/1', backgroundColor: '#f8f8f8', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', border: '1px solid var(--border)' }}>
                        <img src={mainImage} alt={product.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                    </div>
                    {product.images && product.images.length > 1 && (
                        <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                            {product.images.map((img, idx) => (
                                <img 
                                    key={idx} 
                                    src={img} 
                                    alt={`thumbnail ${idx}`} 
                                    onClick={() => setMainImage(img)}
                                    style={{ 
                                        width: '80px', 
                                        height: '80px', 
                                        objectFit: 'cover', 
                                        borderRadius: 'var(--radius-md)', 
                                        border: mainImage === img ? '2px solid var(--primary)' : '1px solid var(--border)',
                                        cursor: 'pointer',
                                        backgroundColor: '#f8f8f8'
                                    }} 
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Product Info */}
                <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column' }}>
                    <span style={{ color: 'var(--primary)', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>{product.brand || product.category}</span>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '1rem', lineHeight: '1.2' }}>{product.title}</h1>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', color: '#fbbf24' }}>
                            ★ <span style={{ color: 'var(--text-main)', marginLeft: '0.25rem', fontWeight: '600' }}>{product.rating}</span>
                        </div>
                        <span style={{ color: 'var(--text-muted)' }}>|</span>
                        <span style={{ color: product.stock > 0 ? '#10b981' : '#ef4444', fontWeight: '500' }}>
                            {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
                        </span>
                    </div>

                    <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
                        ${product.price.toFixed(2)}
                    </div>

                    <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '2rem' }}>
                        {product.description}
                    </p>

                    <button 
                        onClick={() => {
                            addToCart(product);
                            alert("Added to cart!");
                        }}
                        disabled={product.stock <= 0}
                        style={{
                            padding: '1rem 2rem',
                            backgroundColor: product.stock > 0 ? 'var(--primary)' : 'var(--text-muted)',
                            color: 'white',
                            border: 'none',
                            borderRadius: 'var(--radius-md)',
                            fontSize: '1.125rem',
                            fontWeight: '600',
                            cursor: product.stock > 0 ? 'pointer' : 'not-allowed',
                            transition: 'var(--transition)',
                            boxShadow: product.stock > 0 ? '0 4px 14px rgba(0,0,0,0.1)' : 'none',
                            marginBottom: '2rem'
                        }}
                    >
                        {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                    </button>

                    {/* Additional Info */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1.5rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', marginBottom: '3rem' }}>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <strong>🚚 Shipping:</strong> <span style={{ color: 'var(--text-muted)' }}>{product.shippingInformation || 'Ships in 1-2 business days'}</span>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <strong>🔄 Returns:</strong> <span style={{ color: 'var(--text-muted)' }}>{product.returnPolicy || '30 days return policy'}</span>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <strong>🛡️ Warranty:</strong> <span style={{ color: 'var(--text-muted)' }}>{product.warrantyInformation || '1 year warranty'}</span>
                        </div>
                    </div>

                    {/* Reviews Section */}
                    <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Customer Reviews</h2>
                        
                        {/* Mock Add Review Form */}
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            const rating = e.target.rating.value;
                            const comment = e.target.comment.value;
                            const newReview = { rating: Number(rating), comment, date: new Date().toISOString(), reviewerName: 'You' };
                            setProduct(prev => ({...prev, reviews: [newReview, ...(prev.reviews || [])]}));
                            e.target.reset();
                        }} style={{ backgroundColor: 'var(--surface)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', marginBottom: '2rem' }}>
                            <h4 style={{ marginBottom: '1rem' }}>Write a Review</h4>
                            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                                <select name="rating" required style={{ padding: '0.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', backgroundColor: 'var(--background)' }}>
                                    <option value="5">5 Stars - Excellent</option>
                                    <option value="4">4 Stars - Good</option>
                                    <option value="3">3 Stars - Average</option>
                                    <option value="2">2 Stars - Poor</option>
                                    <option value="1">1 Star - Terrible</option>
                                </select>
                            </div>
                            <textarea name="comment" required placeholder="What did you think about this product?" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', backgroundColor: 'var(--background)', marginBottom: '1rem', minHeight: '80px', resize: 'vertical' }}></textarea>
                            <button type="submit" style={{ padding: '0.5rem 1.5rem', backgroundColor: 'var(--primary)', color: 'white', border: 'none', borderRadius: 'var(--radius-md)', cursor: 'pointer', fontWeight: '600' }}>Submit Review</button>
                        </form>

                        {/* Reviews List */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {product.reviews && product.reviews.length > 0 ? (
                                product.reviews.map((rev, idx) => (
                                    <div key={idx} style={{ paddingBottom: '1.5rem', borderBottom: idx !== product.reviews.length - 1 ? '1px solid var(--border)' : 'none' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                            <strong>{rev.reviewerName}</strong>
                                            <span style={{ color: '#fbbf24' }}>{"★".repeat(rev.rating)}{"☆".repeat(5-rev.rating)}</span>
                                        </div>
                                        <p style={{ color: 'var(--text-muted)' }}>{rev.comment}</p>
                                        <span style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.5rem', display: 'block' }}>
                                            {new Date(rev.date).toLocaleDateString()}
                                        </span>
                                    </div>
                                ))
                            ) : (
                                <p style={{ color: 'var(--text-muted)' }}>No reviews yet. Be the first to review!</p>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
