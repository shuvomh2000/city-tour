import React from 'react'

const Flex = ({children,className}) => {
  return (
    <div style={{display:"flex"}} className={className}>{children}</div>
  )
}

export default Flex