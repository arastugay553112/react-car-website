import React from 'react'

function ModelItem({image,name,price}) {
  return (
    <div className='modelItem'>
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h1>{name}</h1>
        <p>${price}</p>
    </div>
  )
}

export default ModelItem