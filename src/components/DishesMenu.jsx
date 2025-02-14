//components/DishesMenu.js

import React, { useContext } from 'react';
import DishCard from './DishCard';
import { RestaurantContext } from '../Contexts/RestaurantContext.jsx';

const DishesMenu = () => {
    const { selectedRestaurant } = useContext(RestaurantContext);
    if (!selectedRestaurant || !selectedRestaurant.menu) {
        return <p>No restaurant selected or menu unavailable.</p>;
    }
    return (
        <div>
            <h2>Menu</h2>
            {selectedRestaurant && (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {selectedRestaurant.menu.map((dish) => (
                        <DishCard key={dish.name} dish={dish} />
                     
                    ))}
                </div>
            )}
        </div>
    );
};

export default DishesMenu;
         
