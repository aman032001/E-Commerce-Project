import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Success() {
    const navigate = useNavigate();

    return (
        <div className="container" style={{ padding: '8rem 0', textAlign: 'center', minHeight: '60vh' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Order Confirmed!</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Thank you for your purchase. Your order has been successfully placed.
            </p>
            <button 
                onClick={() => navigate('/')} 
                style={{ padding: '1rem 2rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: 'var(--radius-md)', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' }}
            >
                Continue Shopping
            </button>
        </div>
    );
}
