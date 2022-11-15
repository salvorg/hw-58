import React from 'react';
import ButtonX from "../ButtonX/ButtonX";

interface Props {
  show: boolean;
  type: string;
  onDismiss?: React.MouseEventHandler;
  clickDismissible?: boolean;
}

const Alert: React.FC<Props> = ({show, type, onDismiss, clickDismissible}) => {
  const alertStyle = "w-50 mx-auto justify-content-between align-items-center alert alert-" + type;

  let newAlert = (
    <div
      style={{display: show ? "flex" : "none"}}
      className={alertStyle}

    >
      This is a warning type alert
      <ButtonX
        style={{display: onDismiss ? "inline-block" : "none"}}
        onClose={onDismiss}
      />
    </div>
  )

  if (clickDismissible === undefined) {
    newAlert = (
      <div
        style={{display: show ? "flex" : "none"}}
        className={alertStyle}
        onClick={onDismiss}
      >
        This is a warning type alert
      </div>
    )
  }

  return newAlert;
};

export default Alert;