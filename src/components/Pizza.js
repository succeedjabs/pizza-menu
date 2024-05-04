import React from 'react'

export default function Pizza(props) {

    const pizza = props.pizza;

    if (pizza.soldOut) return null;

    return (
        <li className="pizza">
            <img src={pizza.photoName}
                 style={{width: '200px', height: '200px', borderRadius: '10px'}}
                 alt={pizza.name}/>
            <div>
                <h3>{pizza.name}</h3>
                <p>{pizza.ingredients}</p>
                <p>{pizza.price}</p>
            </div>
        </li>)
}
