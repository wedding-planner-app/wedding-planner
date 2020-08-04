import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import './style.css';

function InputText(props) {
  return (
    <InputGroup className={props.style}>
      <InputGroup.Prepend>
        <InputGroup.Text id={props.id}>{props.name}</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        placeholder={props.placeholder}
      />
    </InputGroup>
  );
}

export default InputText;
