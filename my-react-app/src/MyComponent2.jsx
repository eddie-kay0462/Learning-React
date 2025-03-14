import React , { useState } from "react";
function MyComponent2() {

    const [name , setName] = useState("Guest");
    const [quantity , setQuantity] = useState(1);
    const [comments , setComments] = useState("");
    const [payment , setPayment] = useState("Cash on Delivery");
    const [shipping , setShipping] = useState("Standard");
    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentsChange(event){
        setComments(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }
    
  return (
    <div>
        <input type="text" value={name} onChange = {handleNameChange} />
        <h1>Hello {name}!</h1>
        <input type="number" value={quantity} onChange = {handleQuantityChange} />
        <h1>Quantity: {quantity}</h1>
        <textarea value={comments} onChange = {handleCommentsChange} placeholder="Enter delivery instructions" />
        <h1>Comments: {comments}</h1>
        <select value={payment} onChange = {handlePaymentChange}>
            <option value="Cash on Delivery">Cash on Delivery</option>
            <option value="MasterCard">MasterCard</option>
            <option value="Visa">Visa</option>
            <option value="Paypal">Paypal</option>
        </select>
        <h1>Payment Method: {payment}</h1>
        <label htmlFor="">
            <input type="radio" value="Standard" checked={shipping === "Standard"} onChange={handleShippingChange} />
            Standard
        </label>
        <label htmlFor="">
            <input type="radio" value="Express" checked={shipping === "Express"} onChange={handleShippingChange} />
            Express
        </label>
        <label htmlFor="">
            <input type="radio" value="Overnight" checked={shipping === "Overnight"} onChange={handleShippingChange} />
            Overnight
        </label>
        <label htmlFor="">
            <input type="radio" value="Pickup" checked={shipping === "Pickup"} onChange={handleShippingChange} />
            Pickup
        </label>
        <h1>Shipping Method: {shipping}</h1>
    </div>
  );
}


export default MyComponent2;