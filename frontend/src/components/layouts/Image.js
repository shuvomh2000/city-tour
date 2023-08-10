import React from 'react'

const Image = ({className,src}) => {
  return (
   <picture>
    <img style={{width:"100%"}} className={className} src={src}/>
   </picture>
  )
}

export default Image