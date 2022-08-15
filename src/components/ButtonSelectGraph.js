import React from 'react'
import "./style.css"
const ButtonSelectGraph = (props) => {
    let name = props.name_of_graph
  return (
    <btn className='btn'>{name}</btn>

  )
}

export default ButtonSelectGraph