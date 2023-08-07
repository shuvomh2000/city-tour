import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./InputBox.css"

const InputBox = ({type,placeholder}) => {
  return (
    <InputGroup className="mb-3 form">
        <Form.Control
          type={type}
          placeholder={placeholder}
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      
  )
}

export default InputBox