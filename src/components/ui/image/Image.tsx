// import React from 'react'
interface ImageProps {
    imageURL?: string;
    alt?: string;
    className?: string;

}

const Image = ({imageURL , alt , className} : ImageProps) => {
  return (
    <img src={imageURL} alt={alt} className={className}/>
  )
}

export default Image