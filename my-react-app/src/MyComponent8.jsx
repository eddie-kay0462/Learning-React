import { func } from "prop-types";
import React, {useEffect, useRef, useState} from "react";
function MyComponent8() {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
    console.log("COmponent Mounted");
    });
    
    function handleClick1() {
        inputRef1.current.style.backgroundColor = "red";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick2() {
        inputRef2.current.style.backgroundColor = "green";
        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick3() {
        inputRef3.current.style.backgroundColor = "blue";
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
    }
  return (
    <div>
        <button onClick={handleClick1}>
            Click me 1
        </button>
        <input ref={inputRef1} />
        <button onClick={handleClick2}>
            Click me 2
        </button>
        <input ref={inputRef2} />
        <button onClick={handleClick3}>
            Click me 2
        </button>
        <input ref={inputRef3} />
    </div>
   
  );
}


export default MyComponent8;