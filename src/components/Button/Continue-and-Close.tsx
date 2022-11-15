import React from 'react';

interface Props {
  type: string;
  label: string;
  onClick: React.MouseEventHandler;
}

const ContinueAndClose: React.FC<Props> = ({type, label, onClick}) => {
  return (
    <button
      className={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ContinueAndClose;