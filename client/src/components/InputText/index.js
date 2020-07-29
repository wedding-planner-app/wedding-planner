import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import './style.css';

function InputText(props) {
  return (
    <InputGroup className={props.style}>
      <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default">
          {props.name}
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
      />
    </InputGroup>
  );
}

export default InputText;
