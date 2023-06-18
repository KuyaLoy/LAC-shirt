import React from 'react'

const Button = ({onclick, className, content}) => {
  return (
    <>
        <button onClick={onclick} className={className} >{content}</button>
    </>
  )
}

export default Button