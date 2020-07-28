import React from 'react';
import {
  InputGroup,
  Dropdown,
  FormControl,
  DropdownButton,
} from 'react-bootstrap';
import './style.css';

function DropdownButtonAll(props) {
  return (
    <InputGroup className="mb-3">
      <DropdownButton
        as={InputGroup.Prepend}
        variant="outline-secondary"
        title="State"
        id="input-group-dropdown-1"
      >
        <Dropdown.Item href="#">Alabama</Dropdown.Item>
        <Dropdown.Item href="#">Alaska</Dropdown.Item>
        <Dropdown.Item href="#">Arizona</Dropdown.Item>
        <Dropdown.Item href="#">Arkansas</Dropdown.Item>
        <Dropdown.Item href="#">California</Dropdown.Item>
        <Dropdown.Item href="#">Colorado</Dropdown.Item>
        <Dropdown.Item href="#">Connecticut</Dropdown.Item>
        <Dropdown.Item href="#">Delaware</Dropdown.Item>
        <Dropdown.Item href="#">Florida</Dropdown.Item>
        <Dropdown.Item href="#">Georgia</Dropdown.Item>
        <Dropdown.Item href="#">Hawaii</Dropdown.Item>
        <Dropdown.Item href="#">Idaho</Dropdown.Item>
        <Dropdown.Item href="#">Illinois</Dropdown.Item>
        <Dropdown.Item href="#">Indiana</Dropdown.Item>
        <Dropdown.Item href="#">Iowa</Dropdown.Item>
        <Dropdown.Item href="#">Kansas</Dropdown.Item>
        <Dropdown.Item href="#">Kentucky</Dropdown.Item>
        <Dropdown.Item href="#">Louisiana</Dropdown.Item>
        <Dropdown.Item href="#">Maine</Dropdown.Item>
        <Dropdown.Item href="#">Maryland</Dropdown.Item>
        <Dropdown.Item href="#">Massachusetts</Dropdown.Item>
        <Dropdown.Item href="#">Michigan</Dropdown.Item>
        <Dropdown.Item href="#">Minnesota</Dropdown.Item>
        <Dropdown.Item href="#">Mississippi</Dropdown.Item>
        <Dropdown.Item href="#">Missouri</Dropdown.Item>
        <Dropdown.Item href="#">Montana</Dropdown.Item>
        <Dropdown.Item href="#">Nebraska</Dropdown.Item>
        <Dropdown.Item href="#">Nevada</Dropdown.Item>
        <Dropdown.Item href="#">New Hampshire</Dropdown.Item>
        <Dropdown.Item href="#">New Jersey</Dropdown.Item>
        <Dropdown.Item href="#">New Mexico</Dropdown.Item>
        <Dropdown.Item href="#">New York</Dropdown.Item>
        <Dropdown.Item href="#">North Carolina</Dropdown.Item>
        <Dropdown.Item href="#">North Dakota</Dropdown.Item>
        <Dropdown.Item href="#">Ohio</Dropdown.Item>
        <Dropdown.Item href="#">Oklahoma</Dropdown.Item>
        <Dropdown.Item href="#">Oregon</Dropdown.Item>
        <Dropdown.Item href="#">Pennsylvania</Dropdown.Item>
        <Dropdown.Item href="#">Rhode Island</Dropdown.Item>
        <Dropdown.Item href="#">South Carolina</Dropdown.Item>
        <Dropdown.Item href="#">South Dakota</Dropdown.Item>
        <Dropdown.Item href="#">Tennessee</Dropdown.Item>
        <Dropdown.Item href="#">Texas</Dropdown.Item>
        <Dropdown.Item href="#">Utah</Dropdown.Item>
        <Dropdown.Item href="#">Vermont</Dropdown.Item>
        <Dropdown.Item href="#">Virginia</Dropdown.Item>
        <Dropdown.Item href="#">Washington</Dropdown.Item>
        <Dropdown.Item href="#">West Virginia</Dropdown.Item>
        <Dropdown.Item href="#">Wisconsin</Dropdown.Item>
        <Dropdown.Item href="#">Wyoming</Dropdown.Item>
      </DropdownButton>
      <FormControl aria-describedby="basic-addon1" />
    </InputGroup>
  );
}

export default DropdownButtonAll;
