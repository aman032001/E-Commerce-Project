import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'

export default function Card({data1}) {
    const { addToCart, wishlist, toggleWishlist } = useContext(ShopContext);
    const navigate = useNavigate();

    const isWishlisted = wishlist.some(item => item.id === data1.id);

    return (
    <div 
    onClick={() => navigate(`/product/${data1.id}`)}
    style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--surface)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        boxShadow: "var(--shadow-sm)",
        transition: "var(--transition)",
        border: "1px solid var(--border)",
        cursor: "pointer",
        height: "100%",
        paddingBottom: "1rem",
        position: "relative"
    }}
    onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "var(--shadow-md)";
    }}
    onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "var(--shadow-sm)";
    }}>
        {/* Wishlist Button */}
        <button 
            onClick={(e) => {
                e.stopPropagation();
                toggleWishlist(data1);
            }}
            style={{
                position: 'absolute',
                top: '0.75rem',
                right: '0.75rem',
                background: 'rgba(255, 255, 255, 0.8)',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}
        >
            <svg width="18" height="18" viewBox="0 0 24 24" fill={isWishlisted ? "#ef4444" : "none"} stroke={isWishlisted ? "#ef4444" : "#64748b"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </button>
        <div style={{
            width: "100%",
            aspectRatio: "3/4",
            backgroundColor: "#f8f8f8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            padding: "1rem"
        }}>
            <img 
                style={{maxWidth: "100%", maxHeight: "100%", objectFit: "contain"}} 
                src={data1.thumbnail || data1.image} 
                alt={data1.title} 
            />
        </div>
        
        <div style={{ padding: "1rem 1.25rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
            <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)", marginBottom: "0.25rem", fontWeight: "600" }}>
                {data1.category}
            </span>
            <h3 style={{ fontSize: "1.125rem", color: "var(--text-main)", marginBottom: "0.5rem", fontWeight: "500", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                {data1.title}
            </h3>
            <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "1rem" }}>
                <span style={{ fontSize: "1.25rem", fontWeight: "700", color: "var(--text-main)" }}>
                    ${data1.price}
                </span>
                <button 
                onClick={(e) => {
                    e.stopPropagation();
                    addToCart(data1);
                }}
                style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "var(--primary)",
                    color: "white",
                    border: "none",
                    borderRadius: "var(--radius-md)",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "var(--transition)"
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = "var(--primary-hover)"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "var(--primary)"}>
                    Add
                </button>
            </div>
        </div>
    </div>
  )
}

