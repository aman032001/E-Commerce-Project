import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from "../images/Shopkaro.png"

export default function Navbar() {
    const location = useLocation();

    let styles = {
        width: "100%",
        height: "70px",
        backgroundColor: "var(--surface)",
        boxShadow: "var(--shadow-sm)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 2rem",
        position: "sticky",
        top: 0,
        zIndex: 1000
    }
    
    let navLinksStyle = {
        display: "flex",
        gap: "2rem",
        alignItems: "center"
    }

    const getLinkStyle = (path) => ({
        fontSize: "1rem",
        fontWeight: "500",
        color: location.pathname === path ? "var(--primary)" : "var(--text-main)",
        textDecoration: "none",
        transition: "var(--transition)",
        padding: "0.5rem 0",
        borderBottom: location.pathname === path ? "2px solid var(--primary)" : "2px solid transparent"
    });

  return (
    <nav style={styles}>
        <Link to={"/"} style={{ display: 'flex', alignItems: 'center' }}>
            {/* Fallback text if logo fails to load, otherwise nicely sized logo */}
            <img style={{height:"40px", objectFit: "contain"}} src={Logo} alt="Shopkaro" />
        </Link>
        
        <div style={navLinksStyle}>
            <Link style={getLinkStyle('/mens')} to="/mens">Men</Link>
            <Link style={getLinkStyle('/womens')} to="/womens">Women</Link>
            <Link style={getLinkStyle('/kids')} to="/kids">Kids</Link>
            <Link style={getLinkStyle('/homeandkitchen')} to="/homeandkitchen">Home</Link>
            <Link style={getLinkStyle('/toys')} to="/toys">Toys</Link>
            <Link style={getLinkStyle('/footwear')} to="/footwear">Footwear</Link>
        </div>
        
        {/* Placeholder for cart/user actions to make it look complete */}
        <div style={{ display: 'flex', gap: '1rem' }}>
            <button style={{ padding: '0.5rem 1rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', cursor: 'pointer', fontWeight: '500' }}>Log in</button>
            <button style={{ padding: '0.5rem 1rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: 'var(--radius-md)', cursor: 'pointer', fontWeight: '500' }}>Cart (0)</button>
        </div>
    </nav>
  )
}
