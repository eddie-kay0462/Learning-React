//update array of objects in state

import React , {useState} from "react";

function MyComponent5() {  
    const [cars, setCars] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");


    function handleAddCar() {
        const newCar = {
            year: year,
            make: make,
            model: model
        };
        setCars((prevCars) => [...prevCars, newCar]);
        setYear(new Date().getFullYear());
        setMake("");
        setModel("");
    }

    function handleRemoveCar(index) {
        setCars((prevCars) => prevCars.filter((_, i) => i !== index));   //filter out the car at the index
    }

    function handleYearChange(event) {
        setYear(event.target.value);
    }

    function handleMakeChange(event) {
        setMake(event.target.value);   
    }

    function handleModelChange(event) {
        setModel(event.target.value);
    }

    return (
        <div>
            <h2>
                List of Car Objects
            </h2>
            <ul>
                {cars.map((car, index) => (
                    <li key={index}>
                        {car.year} {car.make} {car.model}
                        <button onClick={() => handleRemoveCar(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h2>
                Add a Car
            </h2>
            <label>
                Year:
                <input type="number" value={year} onChange={handleYearChange} />
            </label> <br />
            <label>
                Make:
                <input type="text" value={make} onChange={handleMakeChange} />
            </label> <br />
            <label>
                Model:
                <input type="text" value={model} onChange={handleModelChange} />
            </label> <br />
            <button onClick={handleAddCar}>Add Car</button> 
        </div>
    ); 
}


export default MyComponent5;