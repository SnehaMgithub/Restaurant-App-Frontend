import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create the Restaurant Context
export const RestaurantContext = createContext();

const RestaurantProvider = ({ children }) => {
    // State management
    const [restaurants, setRestaurants] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    // Fetch restaurants from API on mount
    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await axios.get("https://restaurant-app-backend-95kp.onrender.com/api/restaurants");
                setRestaurants(response.data);
            } catch (error) {
                console.error("Error fetching restaurants:", error.message);
            }
        };

        fetchRestaurants();
    }, []);

    // ✅ Function to add an item to the cart
    const handleAddItems = (dish) => {
        console.log("Adding Dish:", dish);

        // Check if the dish already exists in the cart
        const existingItemIndex = cartItems.findIndex(item => item._id === dish._id);

        let updatedCartItems = [...cartItems];

        if (existingItemIndex !== -1) {
            // Increment quantity if dish exists in cart
            updatedCartItems[existingItemIndex] = {
                ...updatedCartItems[existingItemIndex],
                quantity: updatedCartItems[existingItemIndex].quantity + 1,
            };
        } else {
            // Add new dish to cart with quantity 1
            updatedCartItems.push({ ...dish, quantity: 1 });
        }

        setCartItems(updatedCartItems);
        setTotalPrice(prev => prev + dish.price);
    };

    // ✅ Function to remove an item from the cart
    const handleRemoveItems = (dish) => {
        console.log("Removing Dish:", dish);

        // Find the dish in the cart
        const existingItemIndex = cartItems.findIndex(item => item._id === dish._id);

        if (existingItemIndex !== -1) {
            let updatedCartItems = [...cartItems];

            if (updatedCartItems[existingItemIndex].quantity > 1) {
                // Decrease quantity if greater than 1
                updatedCartItems[existingItemIndex].quantity -= 1;
            } else {
                // Remove item from cart if quantity is 1
                updatedCartItems.splice(existingItemIndex, 1);
            }

            setCartItems(updatedCartItems);
            setTotalPrice(prev => prev - dish.price);
        } else {
            console.log("Dish does not exist in the cart.");
        }
    };

    // Context value (global state)
    const value = {
        restaurants,
        selectedRestaurant,
        setSelectedRestaurant,
        cartItems,
        handleAddItems,
        handleRemoveItems,
        totalPrice,
    };

    return (
        <RestaurantContext.Provider value={value}>
            {children}
        </RestaurantContext.Provider>
    );
};

export default RestaurantProvider;
