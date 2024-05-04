import React from 'react'
import Order from "./Order";

export default function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 23;
    const isOpen = hour >= openHour && hour < closeHour;
    return (
        <footer className="footer">
            {isOpen ? (
                <Order closeHour={closeHour}/>
            ) : (
                <p>
                    We are closed. We open at {openHour}:00. Come visit us tomorrow!
                </p>
            )}
        </footer>
    )

}
