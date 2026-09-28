import React from 'react'

export default function Footer() {
    return (
        <footer style={{
            backgroundColor: "var(--surface)",
            borderTop: "1px solid var(--border)",
            padding: "4rem 2rem 2rem 2rem",
            marginTop: "4rem",
            color: "var(--text-main)"
        }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '1rem' }}>Shopkaro<span style={{color: 'var(--primary)'}}>.</span></h3>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Your premium destination for the best products online. Quality guaranteed with every purchase.</p>
                </div>
                <div>
                    <h4 style={{ fontWeight: '600', marginBottom: '1.5rem' }}>Shop</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <li><a href="/mens" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Men's Collection</a></li>
                        <li><a href="/womens" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Women's Collection</a></li>
                        <li><a href="/kids" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Kids' Collection</a></li>
                        <li><a href="/footwear" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Footwear</a></li>
                    </ul>
                </div>
                <div>
                    <h4 style={{ fontWeight: '600', marginBottom: '1.5rem' }}>Help & Support</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <li><a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Track Order</a></li>
                        <li><a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Returns & Exchanges</a></li>
                        <li><a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Customer Service</a></li>
                        <li><a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>FAQ</a></li>
                    </ul>
                </div>
                <div>
                    <h4 style={{ fontWeight: '600', marginBottom: '1.5rem' }}>Stay Connected</h4>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Subscribe to our newsletter for updates and exclusive offers.</p>
                    <div style={{ display: 'flex' }}>
                        <input type="email" placeholder="Email Address" style={{ padding: '0.5rem', borderRadius: 'var(--radius-md) 0 0 var(--radius-md)', border: '1px solid var(--border)', outline: 'none', flex: 1 }} />
                        <button style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--primary)', color: 'white', border: 'none', borderRadius: '0 var(--radius-md) var(--radius-md) 0', cursor: 'pointer', fontWeight: '500' }}>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="container" style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                &copy; {new Date().getFullYear()} Shopkaro. All rights reserved.
            </div>
        </footer>
    )
}
