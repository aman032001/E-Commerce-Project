import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carouseal from '../components/Carouseal';
import Card from '../components/Card';

export default function Home() {
    const [trending, setTrending] = useState([]);
    const [loading, setLoading] = useState(true);

    const images = [
        "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/bac6e385f3bd157c.jpeg?q=60",
        "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/6204fe0e1d4cd758.jpeg?q=60",
        "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/b2acdfecca8c1ec6.jpeg?q=60",
        "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/2746152f289ef43c.jpg?q=60",
        "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/843b04f435158cc3.jpg?q=60"
    ];

    const categories = [
        { name: "Men's Fashion", path: "/mens", img: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=400" },
        { name: "Women's Fashion", path: "/womens", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=400" },
        { name: "Kids' Wear", path: "/kids", img: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&q=80&w=400" },
        { name: "Footwear", path: "/footwear", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=400" }
    ];

    const features = [
        { icon: "🚚", title: "Free Shipping", desc: "On orders over $50" },
        { icon: "🛡️", title: "Secure Payment", desc: "100% secure checkout" },
        { icon: "🔄", title: "Easy Returns", desc: "30 days return policy" },
        { icon: "📞", title: "24/7 Support", desc: "Always here for you" }
    ];

    useEffect(() => {
        async function fetchTrending() {
            try {
                // Fetch random products to serve as trending
                let res = await fetch('https://dummyjson.com/products?limit=8&skip=10');
                let data = await res.json();
                setTrending(data.products || []);
            } catch (err) {
                console.error("Failed to fetch trending:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchTrending();
    }, []);

    return (
        <div>
            {/* Main Carousel Hero - True Full Bleed */}
            <div>
                <Carouseal data={images} />
            </div>

            {/* Shop by Category */}
            <div className="container" style={{ padding: '4rem 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
                    <div>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--text-main)' }}>Shop by Category</h2>
                        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Discover our curated collections</p>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {categories.map((cat, idx) => (
                        <Link to={cat.path} key={idx} style={{ textDecoration: 'none' }}>
                            <div style={{
                                position: 'relative',
                                borderRadius: 'var(--radius-lg)',
                                overflow: 'hidden',
                                aspectRatio: '4/5',
                                boxShadow: 'var(--shadow-md)',
                                cursor: 'pointer',
                                transition: 'var(--transition)'
                            }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                                <img src={cat.img} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0, left: 0, right: 0,
                                    padding: '2rem 1rem 1rem',
                                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                                    color: 'white',
                                    textAlign: 'center'
                                }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{cat.name}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Promotional Banner */}
            <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '4rem 0', margin: '2rem 0' }}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
                    <div style={{ flex: '1 1 500px' }}>
                        <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600', marginBottom: '1rem', display: 'block', color: 'rgba(255,255,255,0.8)' }}>Limited Time Offer</span>
                        <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.1' }}>Get 20% Off Your First Order</h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '2rem', color: 'rgba(255,255,255,0.9)' }}>Upgrade your wardrobe with our latest premium collections. Use code <strong>WELCOME20</strong> at checkout.</p>
                        <button style={{ 
                            padding: '1rem 2rem', 
                            backgroundColor: 'white', 
                            color: 'var(--primary)', 
                            border: 'none', 
                            borderRadius: 'var(--radius-md)', 
                            fontSize: '1.125rem', 
                            fontWeight: '600', 
                            cursor: 'pointer',
                            boxShadow: '0 4px 14px rgba(0,0,0,0.1)'
                        }}>
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Deal of the Day */}
            <div className="container" style={{ padding: '4rem 0' }}>
                <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '4rem', 
                    backgroundColor: 'var(--surface)', 
                    borderRadius: 'var(--radius-lg)', 
                    padding: '3rem',
                    boxShadow: 'var(--shadow-md)',
                    border: '1px solid var(--border)'
                }}>
                    <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ 
                            display: 'inline-block', 
                            padding: '0.5rem 1rem', 
                            backgroundColor: '#ef4444', 
                            color: 'white', 
                            fontWeight: 'bold', 
                            borderRadius: '50px', 
                            marginBottom: '1rem',
                            alignSelf: 'flex-start'
                        }}>
                            DEAL OF THE DAY
                        </div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--text-main)', lineHeight: '1.2' }}>Premium Wireless Headphones</h2>
                        <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>Experience studio-quality sound with active noise cancellation. Grab this exclusive deal before the timer runs out!</p>
                        
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{ textAlign: 'center', backgroundColor: 'var(--bg-main)', padding: '1rem', borderRadius: 'var(--radius-md)', minWidth: '70px', border: '1px solid var(--border)' }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-main)' }}>04</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Hours</div>
                            </div>
                            <div style={{ textAlign: 'center', backgroundColor: 'var(--bg-main)', padding: '1rem', borderRadius: 'var(--radius-md)', minWidth: '70px', border: '1px solid var(--border)' }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-main)' }}>45</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Mins</div>
                            </div>
                            <div style={{ textAlign: 'center', backgroundColor: 'var(--bg-main)', padding: '1rem', borderRadius: 'var(--radius-md)', minWidth: '70px', border: '1px solid var(--border)' }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-main)' }}>12</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Secs</div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                            <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary)' }}>$129.99</div>
                            <div style={{ fontSize: '1.25rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>$249.99</div>
                        </div>
                    </div>
                    <div style={{ flex: '1 1 300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img 
                            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&w=800&q=80" 
                            alt="Headphones" 
                            style={{ maxWidth: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', transform: 'rotate(-5deg)', transition: 'transform 0.3s' }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'rotate(-5deg)'}
                        />
                    </div>
                </div>
            </div>

            {/* Trending Products */}
            <div className="container" style={{ padding: '4rem 0' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--text-main)' }}>Trending Right Now</h2>
                    <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem', fontSize: '1.125rem' }}>Our most popular products based on sales</p>
                </div>
                
                {loading ? (
                    <div style={{ textAlign: 'center', padding: '2rem' }}>Loading trending items...</div>
                ) : (
                    <div className="product-grid">
                        {trending.map((el, i) => <Card data1={el} key={i}/>)}
                    </div>
                )}
            </div>

            {/* Features/Benefits */}
            <div style={{ backgroundColor: 'var(--surface)', padding: '4rem 0', borderTop: '1px solid var(--border)' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                    {features.map((feat, idx) => (
                        <div key={idx} style={{ padding: '1rem', backgroundColor: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{feat.icon}</div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{feat.title}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{feat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonials */}
            <div className="container" style={{ padding: '5rem 0' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--text-main)' }}>What Our Customers Say</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {[
                        { name: "Sarah Jenkins", role: "Fashion Blogger", quote: "Shopkaro has completely changed how I shop. The quality is unmatched and delivery is insanely fast!", rating: 5 },
                        { name: "Michael Chen", role: "Verified Buyer", quote: "I was skeptical at first, but the Deal of the Day was too good to pass up. Now I'm a loyal customer.", rating: 5 },
                        { name: "Emma Watson", role: "Verified Buyer", quote: "Their customer support is top-tier. I had to exchange a size and it was done within 48 hours without any hassle.", rating: 4 }
                    ].map((review, idx) => (
                        <div key={idx} style={{ padding: '2rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ color: '#fbbf24', fontSize: '1.25rem', marginBottom: '1rem' }}>
                                {'★'.repeat(review.rating)}{'☆'.repeat(5-review.rating)}
                            </div>
                            <p style={{ fontSize: '1.125rem', color: 'var(--text-main)', fontStyle: 'italic', marginBottom: '2rem', flex: 1 }}>
                                "{review.quote}"
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.25rem' }}>
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <div style={{ fontWeight: '700', color: 'var(--text-main)' }}>{review.name}</div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{review.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Brands Marquee */}
            <div style={{ padding: '3rem 0', borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-main)', overflow: 'hidden' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', opacity: 0.5 }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '800', margin: 0 }}>NIKE</h2>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '800', margin: 0 }}>ADIDAS</h2>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '800', margin: 0 }}>PUMA</h2>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '800', margin: 0 }}>ZARA</h2>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '800', margin: 0 }}>H&M</h2>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '800', margin: 0 }}>LEVI'S</h2>
                </div>
            </div>

            {/* Newsletter Section */}
            <div style={{ backgroundColor: '#0f172a', color: 'white', padding: '5rem 0', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '600px' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Join the Shopkaro Family</h2>
                    <p style={{ fontSize: '1.125rem', color: '#94a3b8', marginBottom: '2.5rem' }}>Subscribe to our newsletter to receive exclusive offers, latest news, and updates directly in your inbox.</p>
                    <form onSubmit={e => { e.preventDefault(); alert('Subscribed successfully!'); }} style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                        <input 
                            type="email" 
                            placeholder="Enter your email address..." 
                            required
                            style={{ padding: '1rem 1.5rem', borderRadius: '50px', border: 'none', outline: 'none', width: '100%', maxWidth: '350px', fontSize: '1rem' }} 
                        />
                        <button type="submit" style={{ padding: '1rem 2rem', borderRadius: '50px', backgroundColor: 'var(--primary)', color: 'white', border: 'none', fontWeight: '700', cursor: 'pointer', fontSize: '1rem' }}>
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
