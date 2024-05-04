import React from 'react'
import Pizza from "./Pizza";
import {pizzaData} from "../data";

export default function Menu() {
    const pizzas = pizzaData;
    const numberOfPizzas = pizzas.length;
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            {numberOfPizzas > 0 ? (
                <ul className="pizzas">
                    {pizzas.map((pizza) => {
                        return <Pizza key={pizza.name} pizza={pizza} />
                    })}
                </ul>
            ) : (
                <p>No pizzas available :( </p>
            )}

        </main>
    )
}
