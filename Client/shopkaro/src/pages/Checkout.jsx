import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const generateOrderId = () => 'ORD-' + Math.floor(Math.random() * 1000000);
const getCurrentDate = () => new Date().toLocaleDateString();

export default function Checkout() {
    const { cart, setCart, showToast, addOrder } = useContext(ShopContext);
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({ name: '', address: '', city: '', zip: '', card: '' });

    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newOrder = {
            id: generateOrderId(),
            date: getCurrentDate(),
            items: cart,
            total: total,
            status: 'Processing'
        };
        addOrder(newOrder);
        
        setCart([]); // Clear cart
        showToast("Order placed successfully!");
        navigate('/success');
    };

    if (cart.length === 0) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h2>Your cart is empty.</h2>
                <button onClick={() => navigate('/')} style={{ marginTop: '1rem', padding: '0.75rem 1.5rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: 'var(--radius-md)' }}>Go Shopping</button>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '4rem 0', display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 500px' }}>
                <h1 style={{ marginBottom: '2rem' }}>Checkout</h1>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <input required type="text" placeholder="Full Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={inputStyle} />
                    <input required type="text" placeholder="Shipping Address" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} style={inputStyle} />
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <input required type="text" placeholder="City" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} style={{...inputStyle, flex: 1}} />
                        <input required type="text" placeholder="Zip Code" value={formData.zip} onChange={e => setFormData({...formData, zip: e.target.value})} style={{...inputStyle, flex: 1}} />
                    </div>
                    <input required type="text" placeholder="Credit Card Number" value={formData.card} onChange={e => setFormData({...formData, card: e.target.value})} style={inputStyle} />
                    
                    <button type="submit" style={{ padding: '1rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: 'var(--radius-md)', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', marginTop: '1rem' }}>
                        Pay ${total.toFixed(2)}
                    </button>
                </form>
            </div>
            
            <div style={{ flex: '1 1 300px', backgroundColor: 'var(--surface)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
                <h2 style={{ marginBottom: '1.5rem' }}>Order Summary</h2>
                {cart.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <span>{item.title} (x{item.quantity})</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                ))}
                <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '1.5rem 0' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.25rem' }}>
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
}

const inputStyle = {
    padding: '1rem',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border)',
    backgroundColor: 'var(--surface)',
    color: 'var(--text-main)',
    fontSize: '1rem',
    outline: 'none'
};
