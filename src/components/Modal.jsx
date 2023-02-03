import React from 'react'

const Modal = ({children, isOpen, closeModal}) => {
  return (
    <div className={`create-container ${isOpen && "is-open"}`} onClick={closeModal}>
        {children}
    </div>
  )
}

export default Modal