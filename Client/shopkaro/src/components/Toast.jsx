import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

export default function Toast() {
    const { toast } = useContext(ShopContext);

    if (!toast.show) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            backgroundColor: '#10b981',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: 'var(--radius-md)',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            zIndex: 9999,
            fontWeight: '600',
            animation: 'slideUp 0.3s ease-out forwards'
        }}>
            {toast.message}
            <style>{`
                @keyframes slideUp {
                    from { transform: translateY(100%); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
            `}</style>
        </div>
    );
}
