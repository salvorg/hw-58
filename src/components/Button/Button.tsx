import React, {useState} from 'react';
import Modal from "../Modal/Modal";
import ContinueAndClose from "./Continue-and-Close";

const Button = () => {
  const [showModal, setShowModal] = useState(false);

  const cancel = () => setShowModal(false);
  const next = () => alert('Continue was clicked!')

  const buttons = [
    {type: 'btn btn-primary', label: 'Continue', onClick: next},
    {type: 'btn btn-danger', label: 'Close', onClick: cancel},
  ];

  return (
    <>
      <button
        className="btn btn-primary m-5"
        onClick={() => setShowModal(true)}
      >
        Open Modal Window
      </button>
      <Modal show={showModal} title="Some title" onClose={cancel}>
        <div className="modal-body">
          Modal Content
        </div>
        <div className="modal-footer">
          {buttons.map(btn => (
            <ContinueAndClose
              key={Math.fround(Math.random())}
              type={btn.type}
              label={btn.label}
              onClick={btn.onClick}
            />
          ))}
        </div>
      </Modal>
    </>
  );
};

export default Button;