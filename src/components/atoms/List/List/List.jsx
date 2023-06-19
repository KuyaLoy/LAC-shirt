import React from 'react'

const List = ({className, listStyle, list}) => {

    
  return (
    <>
        <ul className={className} style={listStyle === '' ? {border : '1px solid red'} : {listStyle : listStyle, paddingLeft: '15px'}} >
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
        </ul>
    </>
  )
}

export default List