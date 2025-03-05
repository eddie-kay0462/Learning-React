//update arrays in state
import React, {useState} from "react";

function MyComponent4() {
    const [foods, setFoods] = useState(["Pizza", "Burger", "Pasta"]);
    
    function addFood() {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFoods((prevFoods) => [...prevFoods, newFood]);
    }

    function removeFood() {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFoods((prevFoods) => prevFoods.filter((food) => food !== newFood));
    }
    return (
        <div>
            <h1>My Favorite Foods</h1>
            <ul>
                {foods.map((food, index) => (
                    <li key={index}>{food}</li>
                ))}
            </ul>
            <input type="text" name="" id="foodInput" placeholder="Enter a food to add or remove"/>
            <button onClick={addFood}>Add Food</button>
            <button onClick={removeFood}>Remove Food</button>
        </div>
         
    );
}


export default MyComponent4