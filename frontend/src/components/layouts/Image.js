import React from 'react'

const Image = ({className,src}) => {
  return (
   <picture>
    <img className={className} src={src}/>
   </picture>
  )
}

export default Image