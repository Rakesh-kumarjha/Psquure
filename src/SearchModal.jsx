import React, { useRef, useEffect } from "react";

const SearchModal = ({ closeModal }) => {
  const modalRef = useRef(null);

  // Close the modal when clicking outside of it
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="search-modal__overlay">
      <div className="search-modal" ref={modalRef}>
        <h2>Search</h2>
        <input type="text"></input>
        {/* Your search input and other search-related elements here */}
        <button className="search-modal__closeButton" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SearchModal;
