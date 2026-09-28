import React, { createContext, useState, useEffect } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        try {
            const savedCart = localStorage.getItem('cart');
            return savedCart && savedCart !== "undefined" ? JSON.parse(savedCart) : [];
        } catch (e) {
            console.error("Failed to parse cart", e);
            return [];
        }
    });

    const [user, setUser] = useState(() => {
        try {
            const savedUser = localStorage.getItem('user');
            return savedUser && savedUser !== "undefined" ? JSON.parse(savedUser) : null;
        } catch (e) {
            console.error("Failed to parse user", e);
            return null;
        }
    });

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const [toast, setToast] = useState({ show: false, message: '' });

    const showToast = (message) => {
        setToast({ show: true, message });
        setTimeout(() => setToast({ show: false, message: '' }), 3000);
    };

    const addToCart = (product) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        showToast("Added to cart!");
    };

    const removeFromCart = (productId) => {
        setCart(prev => prev.filter(item => item.id !== productId));
    };

    const [wishlist, setWishlist] = useState(() => {
        try {
            const savedWishlist = localStorage.getItem('wishlist');
            return savedWishlist ? JSON.parse(savedWishlist) : [];
        } catch (e) {
            console.error(e);
            return [];
        }
    });

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    const toggleWishlist = (product) => {
        setWishlist(prev => {
            const exists = prev.find(item => item.id === product.id);
            if(exists) {
                showToast("Removed from wishlist");
                return prev.filter(item => item.id !== product.id);
            }
            showToast("Added to wishlist!");
            return [...prev, product];
        });
    };

    const [orders, setOrders] = useState(() => {
        try {
            const savedOrders = localStorage.getItem('orders');
            return savedOrders ? JSON.parse(savedOrders) : [];
        } catch (e) {
            console.error(e);
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders));
    }, [orders]);

    const addOrder = (order) => {
        setOrders(prev => [order, ...prev]);
    };

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <ShopContext.Provider value={{ 
            cart, addToCart, removeFromCart, setCart,
            user, login, logout, 
            toast, showToast,
            wishlist, toggleWishlist,
            theme, toggleTheme,
            orders, addOrder
        }}>
            {children}
        </ShopContext.Provider>
    );
};
