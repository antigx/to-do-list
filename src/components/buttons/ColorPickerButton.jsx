import React, { useState } from "react";
import { PiPaintBucketBold } from "react-icons/pi";
import ColorPickerModal from "../ColorPickerModal";

const ColorPickerButton = ({ functions, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (e) => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleColorSelect = (color) => {
    functions.changeBgColor(id, color);
    closeModal();
  };

  return (
    <div className="flex justify-center content-between">
      <button
        className="text-2xl"
        type="button"
        name="color"
        onClick={handleButtonClick}
      >
        <PiPaintBucketBold />
      </button>
      {isModalOpen && (
        <ColorPickerModal
          onSelectColor={handleColorSelect}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ColorPickerButton;
