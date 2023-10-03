import React from 'react'
import { useParams } from 'react-router-dom';
import propertiesData from "../../data/data.json"
import Card from '../card/Card';
const PropertyDetail = () => {
    const  {id}  = useParams();
    console.log(id)
    // const property = propertiesData.find((prop) => prop.id === id);
    // console.log(property)

    const property=propertiesData.find((item)=>item.id == id)
   
  return (
    <div className=''>
    <Card data={property} />
    
      
    </div>
  )
}

export default PropertyDetail
