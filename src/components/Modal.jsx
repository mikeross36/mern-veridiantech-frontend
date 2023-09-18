import { useRef } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";
import { useOutsideClick } from "../hooks/useCustomHooks";
import PropTypes from "prop-types";

export default function Modal({ children, showModal, setShowModal }) {
  const modalRef = useRef(null);

  useOutsideClick(modalRef, function () {
    setShowModal(false);
  });

  if (!showModal) return null;

  return createPortal(
    <main className={`modal__overlay ${showModal && "show-modal"}`}>
      <div className="modal__container" ref={modalRef}>
        <button className="close__modal" onClick={() => setShowModal(false)}>
          <FaTimes />
        </button>
        {children}
      </div>
    </main>,
    document.getElementById("modal")
  );
}

Modal.propTypes = {
  children: PropTypes.object,
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
};
