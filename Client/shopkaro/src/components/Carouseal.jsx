import { useEffect, useState, useRef } from 'react'

export default function Carouseal({data}) {
    let images = data;
    let [curr, setcurr] = useState(0)
    let timer = useRef(null)

    useEffect(() => {
        if(timer.current) clearInterval(timer.current);
        
        timer.current = setInterval(() => {
            setcurr((prev) => {
                return prev >= images.length - 1 ? 0 : prev + 1
            })  
        }, 3000)

        return () => clearInterval(timer.current);
    }, [curr, images.length])

    function prev(){
        let val = curr <= 0 ? images.length - 1 : curr - 1
        setcurr(val)
    }

    function next(){
        let val = curr >= images.length - 1 ? 0 : curr + 1
        setcurr(val)
    }

  return (
    <div style={{
        width: "100vw",
        height: "400px",
        margin: "0 calc(50% - 50vw)",
        marginBottom: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
        boxShadow: "var(--shadow-md)",
        backgroundColor: "var(--surface)"
    }}>
        <button style={{
            position: "absolute", 
            left: "1rem", 
            width: "40px", 
            height: "40px", 
            border: "none", 
            backgroundColor: "rgba(255, 255, 255, 0.8)", 
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 10,
            boxShadow: "var(--shadow-sm)",
            transition: "var(--transition)"
        }} 
        onMouseEnter={e => e.currentTarget.style.backgroundColor = "white"}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.8)"}
        onClick={prev}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>

        <img 
            style={{
                width: "100%", 
                height: "100%", 
                objectFit: "cover",
                transition: "opacity 0.5s ease-in-out"
            }} 
            src={images[curr]} 
            alt="Carousel Banner"
        />

        <button style={{
            position: "absolute", 
            right: "1rem", 
            width: "40px", 
            height: "40px", 
            border: "none", 
            backgroundColor: "rgba(255, 255, 255, 0.8)", 
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 10,
            boxShadow: "var(--shadow-sm)",
            transition: "var(--transition)"
        }} 
        onMouseEnter={e => e.currentTarget.style.backgroundColor = "white"}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.8)"}
        onClick={next}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>

        {/* Indicators */}
        <div style={{
            position: "absolute",
            bottom: "1rem",
            display: "flex",
            gap: "0.5rem"
        }}>
            {images.map((_, idx) => (
                <div 
                    key={idx}
                    onClick={() => setcurr(idx)}
                    style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: curr === idx ? "var(--primary)" : "rgba(255,255,255,0.6)",
                        cursor: "pointer",
                        transition: "var(--transition)",
                        boxShadow: "0 1px 2px rgba(0,0,0,0.3)"
                    }}
                />
            ))}
        </div>
    </div>
  )
}
