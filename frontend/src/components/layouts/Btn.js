import React from 'react'
import {Button} from 'react-bootstrap';

const Btn = ({className,title}) => {
  return (
    <Button className={className}>{title}</Button>
  )
}

export default Btn