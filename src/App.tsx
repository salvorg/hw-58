import React, {useState} from 'react';
import Button from "./components/Button/Button";
import Alert from "./components/Alert/Alert";

function App() {
  const [showAlert, setShowAlert] = useState(true);
  const [showAlert2, setShowAlert2] = useState(true);

  const closeAlert = () => setShowAlert(false);
  const closeAlert2 = () => setShowAlert2(false);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Button/>
      <Alert show={showAlert} type="warning" onDismiss={closeAlert} clickDismissible/>
      <Alert show={showAlert2} type="success" onDismiss={closeAlert2}/>
    </div>
  );
}

export default App;
