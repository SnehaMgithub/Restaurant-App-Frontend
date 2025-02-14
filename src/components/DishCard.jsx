//components/DishCard.js

import React, { useContext } from "react";
import { RestaurantContext } from "../Contexts/RestaurantContext.jsx";

const DishCard = ({ dish }) => {
    const { cartItems, handleAddItems, handleRemoveItems } = useContext(RestaurantContext);

    const cartDish = cartItems.find((item) => item.name === dish.name);
    const quantity = cartDish ? cartDish.quantity : 0;
    const handleAdd = () => {
        handleAddItems(dish);
    };

    const handleRemove = () => {
        handleRemoveItems(dish);
    };

    return (
        <div className="dish-card">
            <h3>{dish.name}</h3>
            <img src={dish.image} alt="" />
            <p>Price: ${dish.price}</p>

            <div
                style={{
                    width: "40%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <button onClick={handleAdd}>+</button>
                <span>{quantity}</span> 
                <button onClick={handleRemove}>-</button>
            </div>
        </div>
    );
};

export default DishCard;
