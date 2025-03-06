import React,  {useState, useEffect} from "react";
function MyComponent6() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    //syntax for useEffect
    // useEffect(() => {
    //     //effect code
    // });
    //three ways to use useEffect
    //1. run after every render
    //2. run only once after the first render
    //3. run after every render and only if a certain value has changed
    
    //this effect will run after every render
    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // }
    // );

    //this effect will run only once after the first render
    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // }, []);

    //this effect will run after every render and only if the count changes
    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color]);
    function addCount() {
        setCount(c => c + 1);
    }
    function subtractCount() {
        setCount(c => c - 1);
    }

    function changeColor() {
        if (color === "green") {
            setColor("red");
        } else {
            setColor("green");
        }
    }
    return (
        <div>
            <p style={{color: color}}>You clicked {count} times</p>
            <button onClick={addCount}>
               add
            </button>
            <button onClick = {subtractCount}>
                Subtract
            </button><br />
            <button onClick= {changeColor}>
                Change Color
            </button>
        </div>
    );
}

export default MyComponent6;