import React from "react";

const SingleColorPicker = ({ color, value, onChange }) => {
  return (
    <div>
      <label htmlFor={`color-${color}`}> {color.toUpperCase()} </label>
      <input
        type="number"
        id={`color-${color}`}
        name={`color-${color}`}
        min="0"
        max="255"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SingleColorPicker;
