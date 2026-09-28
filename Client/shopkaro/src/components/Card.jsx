import React from 'react'

export default function Card({data1}) {
  return (
    <div style={{
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
        paddingBottom: "1rem"
    }}
    onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "var(--shadow-md)";
    }}
    onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "var(--shadow-sm)";
    }}>
        <div style={{
            width: "100%",
            aspectRatio: "3/4",
            backgroundColor: "#f8f8f8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden"
        }}>
            <img 
                style={{width: "100%", height: "100%", objectFit: "cover"}} 
                src={data1.image} 
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
                    ₹ {data1.price}
                </span>
                <button style={{
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
