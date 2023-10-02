import React, { Fragment, useState } from "react";
import { FiFilter } from "react-icons/fi";
import ColorPickerModal from "../ColorPickerModal";

const FilterButton = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (e) => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleColorSelect = (color) => {
    props.filter(color);
    closeModal();
  };

  return (
    <Fragment>
      <button onClick={handleButtonClick}>
        <FiFilter />
      </button>
      {isModalOpen && (
        <ColorPickerModal
          onSelectColor={handleColorSelect}
          onClose={closeModal}
          filter={true}
        />
      )}
    </Fragment>
  );
};

export default FilterButton;
