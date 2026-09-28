import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from "../images/Shopkaro.png"
import { ShopContext } from '../context/ShopContext'

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const { cart, user, theme, toggleTheme, wishlist } = useContext(ShopContext);
    const [searchQuery, setSearchQuery] = useState("");

    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const wishlistCount = wishlist.length;

    const handleSearch = (e) => {
        e.preventDefault();
        if(searchQuery.trim()) {
            navigate(`/search?q=${searchQuery}`);
            setSearchQuery("");
        }
    };

    return (
        <>
            {/* Announcement Bar */}
            <div style={{
                background: "var(--primary)",
                color: "white",
                textAlign: "center",
                padding: "0.5rem",
                fontSize: "0.875rem",
                fontWeight: "500",
                letterSpacing: "0.05em"
            }}>
                ✨ FREE Express Shipping on all orders over $50! ✨
            </div>

            {/* Main Navbar */}
            <nav style={{
                width: "100%",
                height: "80px",
                backgroundColor: theme === 'dark' ? 'rgba(30, 41, 59, 0.9)' : 'rgba(255, 255, 255, 0.9)',
                backdropFilter: "blur(12px)",
                borderBottom: "1px solid var(--border)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 5%",
                position: "sticky",
                top: 0,
                zIndex: 1000,
                boxShadow: "var(--shadow-sm)"
            }}>
                {/* Logo Area */}
                <Link to={"/"} style={{ display: 'flex', alignItems: 'center' }}>
                    <img style={{ height: "45px", objectFit: "contain", transition: "transform 0.3s" }} 
                         onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                         onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                         src={Logo} alt="Shopkaro" />
                </Link>
                
                {/* Navigation Links */}
                <div style={{ gap: "2rem", alignItems: "center", display: window.innerWidth < 1024 ? 'none' : 'flex' }}>
                    {['Men', 'Women', 'Kids', 'Home', 'Toys', 'Footwear'].map((label, idx) => {
                        let path = `/${label.toLowerCase()}`;
                        if (label === 'Home') path = '/homeandkitchen';
                        if (label === 'Men') path = '/mens';
                        if (label === 'Women') path = '/womens';
                        
                        const isActive = location.pathname === path;
                        return (
                            <Link key={idx} to={path} style={{
                                fontSize: "1.05rem",
                                fontWeight: isActive ? "700" : "500",
                                color: isActive ? "var(--primary)" : "var(--text-main)",
                                textDecoration: "none",
                                position: "relative",
                                padding: "0.5rem 0",
                                transition: "color 0.2s ease"
                            }}
                            onMouseEnter={(e) => { if(!isActive) e.target.style.color = "var(--primary)" }}
                            onMouseLeave={(e) => { if(!isActive) e.target.style.color = "var(--text-main)" }}
                            >
                                {label}
                                {isActive && (
                                    <span style={{
                                        position: 'absolute', bottom: 0, left: 0, width: '100%', height: '3px',
                                        backgroundColor: 'var(--primary)', borderRadius: '2px'
                                    }}></span>
                                )}
                            </Link>
                        )
                    })}
                </div>
                
                {/* Right Side Actions */}
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                    
                    {/* Search Bar */}
                    <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center', backgroundColor: theme === 'dark' ? '#0f172a' : '#f1f5f9', borderRadius: '50px', padding: '0.4rem 1rem', border: '1px solid var(--border)' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{ border: 'none', background: 'transparent', outline: 'none', paddingLeft: '0.5rem', width: '120px', fontSize: '0.9rem', color: 'var(--text-main)' }}
                        />
                    </form>

                    {/* Dark Mode Toggle */}
                    <button onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-main)', display: 'flex', alignItems: 'center' }}>
                        {theme === 'dark' ? (
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                        ) : (
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        )}
                    </button>

                    {/* Wishlist */}
                    <button onClick={() => navigate('/wishlist')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-main)', display: 'flex', alignItems: 'center', position: 'relative' }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                        {wishlistCount > 0 && (
                            <span style={{ position: 'absolute', top: '-8px', right: '-8px', backgroundColor: '#ef4444', color: 'white', fontSize: '0.7rem', fontWeight: 'bold', width: '18px', height: '18px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {wishlistCount}
                            </span>
                        )}
                    </button>

                    {/* Cart Button */}
                    <button 
                        onClick={() => navigate('/cart')} 
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-main)', display: 'flex', alignItems: 'center', position: 'relative' }}
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                        {cartCount > 0 && (
                            <span style={{ position: 'absolute', top: '-8px', right: '-8px', backgroundColor: 'var(--primary)', color: 'white', fontSize: '0.7rem', fontWeight: 'bold', width: '18px', height: '18px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {cartCount}
                            </span>
                        )}
                    </button>

                    {/* Auth */}
                    {user ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div onClick={() => navigate('/profile')} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                <div style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                                    {user.user.name.charAt(0).toUpperCase()}
                                </div>
                                <span style={{ fontWeight: '600', color: 'var(--text-main)', fontSize: '0.95rem' }}>{user.user.name}</span>
                            </div>
                        </div>
                    ) : (
                        <button onClick={() => navigate('/login')} style={{ padding: '0.4rem 1rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '50px', cursor: 'pointer', fontWeight: '600' }}>Login</button>
                    )}

                </div>
            </nav>
        </>
    )
}
