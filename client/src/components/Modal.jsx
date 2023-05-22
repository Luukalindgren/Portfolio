import React from "react";

const Modal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div
      onClick={onClose}
      className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full text-center bg-black/50"
    >
      <div className="bg-stone-200 shadow-2xl max-w-[90%] w-[400px] fixed rounded-lg p-4 z-30">
        <p>Thanks for contacting me,</p>
        <p>I'll get back to you soon!</p>
        <button
          onClick={onClose}
          className="px-8 py-2 mt-2 border-2 rounded-lg bg-stone-100"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
