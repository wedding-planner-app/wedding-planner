import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

function BtnComponent(props) {
  return (
    <Button
      type="submit"
      variant="light"
      className="btnColor btn-md m-auto px-5 mb-5 text-white"
      size="md"
    >
      {props.name}
    </Button>
  );
}

export default BtnComponent;
