import React, { useState } from "react";

function MyComponent3() {
    const [car , setCar] = useState({ year : 2020, make : "Toyota", model : "Corolla" });

    function handleYearChange(event) {
        //we will use updater function to update the state
        setCar((prevCar) => {
            return { ...prevCar, year: event.target.value };
        });
    }

    function handleMakeChange(event) {
        setCar((prevCar) => {
            return { ...prevCar, make: event.target.value };
        })
    }

    function handleModelChange(event) {
        setCar((prevCar) => {
            return { ...prevCar, model: event.target.value };
     });
    }

    return (
       <div>
              <h1>My Car</h1>
              <p>Year: {car.year}</p>
              <p>Make: {car.make}</p>
              <p>Model: {car.model}</p>

              <input type="number" value={car.year} onChange={handleYearChange} />
                <input type="text" value={car.make} onChange={handleMakeChange} />
                <input type="text" value={car.model} onChange={handleModelChange} />


           
       </div>
    );
}

export default MyComponent3;