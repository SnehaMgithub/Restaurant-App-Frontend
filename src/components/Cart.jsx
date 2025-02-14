//components/Cart.js

import React, { useContext, useEffect, useState } from 'react';
import { RestaurantContext } from '../Contexts/RestaurantContext';

const Cart = ({ isOpen, onClose }) => {
    const { totalPrice, cartItems } = useContext(RestaurantContext);
   
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (event.target.classList.contains("cart-modal-overlay")) {
                onClose();
            }
        };
        window.addEventListener("click", handleOutsideClick);
        return () => window.removeEventListener("click", handleOutsideClick);
    }, [onClose]);

    return (
        <>
            {isOpen && (
                <div className="cart-modal-overlay">
                    <div className="cart-modal">
                        {/* Close Button */}
                        <button onClick={onClose} className="cart-close">❌</button>
                        
                        <h2>Cart</h2>

                        {cartItems.length === 0 ? (
                            <p>Cart is empty</p>
                        ) : (
                            <>
                                {cartItems.map((item) => (
                                    <div key={item.name} className="cart-item">
                                        <p>{item.name} - ${item.price} x {item.quantity}</p>
                                    </div>
                                ))}

                                {/* ✅ Total Price */}
                                <div className="cart-content">
                                    <span style={{ color: "brown" }}>Total Price: </span> ${totalPrice}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Cart;