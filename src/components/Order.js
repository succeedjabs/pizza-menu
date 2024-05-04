import React from "react";

const Order = ({closeHour}) => {

    return <div className="order">
        <p>
            We are open until {closeHour}:00. Come visit us or order online!
        </p>
        <button className="btn">Order</button>
    </div>
}

export default Order;