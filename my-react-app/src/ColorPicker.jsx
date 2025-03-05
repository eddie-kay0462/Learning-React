import React, {useState} from "react";
function ColorPicker() {
    const [color, setColor] = useState("#000000");
    const handleColorChange = (event) => {
        setColor(event.target.value);
    };
  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected color is: {color}</p>
      </div>
      <label htmlFor="">
        Select a color: <br />
        <input type="color" value={color} onChange={handleColorChange} />
      </label>
    </div>
  );
}


export default ColorPicker;