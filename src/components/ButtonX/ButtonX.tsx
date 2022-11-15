import React from 'react';

interface Props {
  style?: {};
  onClose?: React.MouseEventHandler;
}

const ButtonX: React.FC<Props> = ({style, onClose}) => {
  return (
    <>
      <button
        style={style}
        className="btn btn-warning"
        onClick={onClose}
      >
        X
      </button>
    </>
  );
};

export default ButtonX;