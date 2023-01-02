import React from 'react';
import { ModelList } from '../helpers/ModelList';
import '../styles/Model.css';
import ModelItem from '../components/ModelItem';

function Model() {
  return (
    <div className='model'>
        <h1 className='modelTitle'>Honda Modelleri</h1>
        <div className='modelList'>
            {ModelList.map((modelItem,key)=>{
                return <ModelItem key={key}
                image={modelItem.Image} 
                name={modelItem.name} price={modelItem.price}/>
            })}
        </div>
    </div>
  )
}

export default Model