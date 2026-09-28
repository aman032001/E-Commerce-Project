import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Cart() {
    const { cart, removeFromCart } = useContext(ShopContext);
    const navigate = useNavigate();

    const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div className="container" style={{ padding: '2rem' }}>
            <h1 className="page-title">Your Shopping Cart</h1>
            
            {cart.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                    <h3 style={{ color: 'var(--text-muted)' }}>Your cart is empty</h3>
                    <Link to="/mens" style={{
                        display: 'inline-block',
                        marginTop: '1rem',
                        padding: '0.75rem 1.5rem',
                        backgroundColor: 'var(--primary)',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: 'var(--radius-md)',
                        fontWeight: '500'
                    }}>
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 60%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {cart.map((item, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.5rem',
                                padding: '1rem',
                                backgroundColor: 'var(--surface)',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: 'var(--shadow-sm)',
                                border: '1px solid var(--border)'
                            }}>
                                <img 
                                    src={item.thumbnail || item.image} 
                                    alt={item.title} 
                                    style={{ width: '100px', height: '100px', objectFit: 'contain', backgroundColor: '#f8f8f8', borderRadius: 'var(--radius-md)' }}
                                />
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '1.125rem', marginBottom: '0.25rem', color: 'var(--text-main)' }}>{item.title}</h3>
                                    <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{item.category}</span>
                                    <div style={{ marginTop: '0.5rem', fontWeight: '600', color: 'var(--text-main)' }}>${item.price} x {item.quantity}</div>
                                </div>
                                <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-main)' }}>
                                    ${(item.price * item.quantity).toFixed(2)}
                                </div>
                                <button 
                                    onClick={() => removeFromCart(item.id)}
                                    style={{
                                        padding: '0.5rem',
                                        backgroundColor: '#fee2e2',
                                        color: '#ef4444',
                                        border: 'none',
                                        borderRadius: 'var(--radius-md)',
                                        cursor: 'pointer',
                                        fontWeight: 'bold',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                </button>
                            </div>
                        ))}
                    </div>

                    <div style={{ flex: '1 1 30%', minWidth: '300px' }}>
                        <div style={{
                            padding: '1.5rem',
                            backgroundColor: 'var(--surface)',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-sm)',
                            border: '1px solid var(--border)',
                            position: 'sticky',
                            top: '100px'
                        }}>
                            <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>Order Summary</h2>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--text-muted)' }}>
                                <span>Subtotal ({cart.length} items)</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--text-muted)' }}>
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border)', fontWeight: '700', fontSize: '1.25rem', color: 'var(--text-main)' }}>
                                <span>Total</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>
                            <button 
                            onClick={() => navigate('/checkout')}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                marginTop: '1.5rem',
                                backgroundColor: 'var(--primary)',
                                color: 'white',
                                border: 'none',
                                borderRadius: 'var(--radius-md)',
                                fontSize: '1.125rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'var(--transition)'
                            }}
                            onMouseEnter={e => e.target.style.backgroundColor = 'var(--primary-hover)'}
                            onMouseLeave={e => e.target.style.backgroundColor = 'var(--primary)'}
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
