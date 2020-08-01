import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

function BtnComponent(props) {
  return (
    <Button
      type="submit"
      variant="light"
      className="btnColor btn-md m-auto px-5 mb-5 text-white mt-3"
      size="md"
      onClick={props.onClick}
      disabled={props.validate}
      href={props.href}
    >
      {props.name}
    </Button>
  );
}

export default BtnComponent;
