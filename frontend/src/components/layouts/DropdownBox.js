import React from 'react'

const DropdownBox = ({className,onClick,children,style}) => {
  return (
    <ul className={className} onClick={onClick} style={style}>{children}</ul>
  )
}

export default DropdownBox