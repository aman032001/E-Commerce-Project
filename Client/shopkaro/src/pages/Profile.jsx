import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const { user, orders, logout } = useContext(ShopContext);
    const navigate = useNavigate();

    if (!user) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h2>Please log in to view your profile.</h2>
                <button onClick={() => navigate('/login')} style={{ marginTop: '1rem', padding: '0.75rem 1.5rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>Go to Login</button>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                <div>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>My Profile</h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Welcome back, <strong>{user.user.name}</strong>!</p>
                    <p style={{ color: 'var(--text-muted)' }}>Email: {user.user.email}</p>
                </div>
                <button onClick={() => { logout(); navigate('/'); }} style={{ padding: '0.75rem 1.5rem', background: 'transparent', color: '#ef4444', border: '1px solid #ef4444', borderRadius: '50px', cursor: 'pointer', fontWeight: '600' }}>
                    Logout
                </button>
            </div>

            <h2 style={{ marginBottom: '1.5rem' }}>Order History</h2>
            
            {orders.length === 0 ? (
                <div style={{ padding: '3rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-lg)', textAlign: 'center', border: '1px solid var(--border)' }}>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>You haven't placed any orders yet.</p>
                    <button onClick={() => navigate('/')} style={{ padding: '0.75rem 1.5rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '50px', cursor: 'pointer' }}>Start Shopping</button>
                </div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {orders.map((order, idx) => (
                        <div key={idx} style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '1rem' }}>
                                <div>
                                    <span style={{ fontWeight: 'bold', marginRight: '1rem' }}>Order #{order.id}</span>
                                    <span style={{ color: 'var(--text-muted)' }}>Placed on {order.date}</span>
                                </div>
                                <div>
                                    <span style={{ backgroundColor: '#10b981', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '600' }}>{order.status}</span>
                                </div>
                            </div>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {order.items.map((item, i) => (
                                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <img src={item.thumbnail} alt={item.title} style={{ width: '50px', height: '50px', objectFit: 'contain', backgroundColor: '#f8f8f8', borderRadius: 'var(--radius-md)' }} />
                                            <span>{item.title} x{item.quantity}</span>
                                        </div>
                                        <span style={{ fontWeight: '500' }}>${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '1rem', marginTop: '1rem', borderTop: '1px solid var(--border)' }}>
                                <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Total: ${order.total.toFixed(2)}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
