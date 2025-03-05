import React, { useState } from "react";
function MyComponent() {
   const [name, setName] = useState("Edward Mensah");
   const [age, setAge] = useState(25);
   const [isEmployed, setIsEmployed] = useState(true);

   const updateName = () => {
      setName("John Doe");
   };

   const incrementAge = () => {
      setAge(age + 1);
   }

   const toggleEmploymentStatus = () => {
      setIsEmployed(!isEmployed);
   }
   return (
      <div>
            <h1>{name}</h1>
            <button onClick={updateName}>Update Name</button>
            <h2>{age}</h2>
            <button onClick={incrementAge}>Increment Age</button>
            <h2>{isEmployed ? "Employed" : "Unemployed"}</h2>
            <button onClick={toggleEmploymentStatus}>Toggle Employment Status</button>
            
      </div>
   );
}



export default MyComponent;