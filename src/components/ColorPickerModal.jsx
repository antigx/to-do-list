import React from "react";

const ColorPickerModal = (props) => {
  const colors = [
    "#BAE2FF",
    "#B9FFDD",
    "#FFE8AC",
    "#FFCAB9",
    "#F99494",
    "#9DD6FF",
    "#ECA1FF",
    "#CDCDCD",
    "#DAFF8B",
    "#979797",
    "#FFA285",
    "#A99A7C",
    "#FFFFFF",
  ];
  return (
    <div
      className={`rounded-lg border-2 bg-white grid ${
        props.filter
          ? "grid-cols-2 lg:grid-cols-1 top-4 right-2"
          : "grid-cols-7"
      } absolute mt-4`}
    >
      {colors.map((color, index) => (
        <div
          key={index}
          className="h-8 w-8 rounded-full m-1 border"
          style={{ backgroundColor: color }}
          onClick={() => props.onSelectColor(color)}
        ></div>
      ))}
    </div>
  );
};

export default ColorPickerModal;
