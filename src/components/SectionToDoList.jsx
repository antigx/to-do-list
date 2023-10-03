import React from "react";

const SectionToDoList = ({ title, children }) => {
  return (
    <>
      <p className="py-4 mx-8 lg:mx-28 font-medium">{title}</p>
      <div className="grid lg:grid-cols-2 xl:grid-cols-5 gap-8 justify-items-center mx-8 lg:mx-28">
        {children}
      </div>
    </>
  );
};

export default SectionToDoList;
