import React from 'react'

export default function Pizza(props) {

    const pizza = props.pizza;

    return (
        <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
            <img src={pizza.photoName}
                 style={{width: '200px', height: '200px', borderRadius: '10px'}}
                 alt={pizza.name}/>
            <div>
                <h3>{pizza.name}</h3>
                <p>{pizza.ingredients}</p>
                <span>{pizza.soldOut ? 'SOLD OUT' : pizza.price}</span>
            </div>
        </li>)
}
