import React, { useState, useEffect } from "react";
function MyComponent7() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    //useEffect with an empty array as the second argument will run only once after the first render
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event Listener Added");
        //cleanup function
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event Listener Removed");
        }
    }, []);

    useEffect(() => {
        document.title = `Width: ${width} Height: ${height}`;
    }, [width, height]);
    return (
        <div>
        <p>Window Width: {width}</p>
        <p>Window Height: {height}</p>
        </div>
    );
}

export default MyComponent7;