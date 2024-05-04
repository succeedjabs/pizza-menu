import React from 'react'

export default function Pizza(props) {
    console.log(props.data);
    const pizza = props.data;
    return (
        <div>
            {pizza.map((item, index) => {
                return (
                    <div key={index} className="pizza">
                        <img src={item.photoName}
                             style={{width: '400px', height: '400px'}}
                             alt={item.name}/>
                        <div>
                            <h3>{item.name}</h3>
                            <p>{item.ingredients}</p>
                            <p>{item.price}</p>
                        </div>
                    </div>
                )
            })}
        </div>)
}
