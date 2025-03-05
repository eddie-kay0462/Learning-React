//this version of Counter uses updater functions to update the state based on the previous state.
//This is the recommended way to update the state when the new state is based on the previous state.
//The Counter component is a simple counter that displays the current count and has three buttons: Increment, Decrement, and Reset.
//The increment button increases the count by 1, the decrement button decreases the count by 1, and the reset button resets the count to 0.
//The count state is initialized to 0 using the useState hook.
//The increment, decrement, and reset functions update the count state using the setCount function with the previous count value as an argument.
//The count value is displayed in an h2 element with the count-display class.
//The buttons have onClick event handlers that call the increment, decrement, and reset functions when clicked.
//The Counter component is exported as the default export.
//The Counter component can be used in other components by importing it and rendering it in the JSX.
//The Counter component can be reused in multiple components to display a counter with different functionalities.
//to name an updater function, we can prefix the function argument with prev, as in prevCount, to indicate that it is the previous state value. or we can use the first letter of the state variable name as in c for count. 
import React, { useState } from 'react';
function Counter1() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () =>{
    setCount((prevCount) => prevCount - 1);
  }

  const reset = () =>{
    setCount(0);
  }
  return (
    <div className='counter-container'>
        <h1 className='counter-title'>Counter</h1>
        <h2 className='count-display'>{count}</h2>
        <button onClick={increment} className='counter-button'>Increment</button>
        <button onClick={decrement} className='counter-button'>Decrement</button>
        <button onClick={reset} className='counter-button'>Reset</button>
    </div>
  );
}


export default Counter1;