import React from 'react'

const H1 = ({
    content, className
}) => {
  return (
    <>
        <h1 className={className} >{content}</h1>
    </>
  )
}

export default H1