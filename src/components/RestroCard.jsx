import React from 'react';

function RestroCard({data}) {
  const {name}  = data.info;
  const {areaName} = data.info;
  const {avgRating}= data.info;
  const {cuisines}= data.info;
  const {cloudinaryImageId}=data.info;
  //this below line is converting string not extracting or distructuring  not from data.info
  const cus = cuisines.join(",").join
  

  return (
    <div className='container'>
         
         <img className='img-container' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt='img'/>
         <h2 className='restronameheight'>{name}</h2>
         <h3 className='stars'>stars: {avgRating}</h3>
         <h3 className='areaname'>{areaName}</h3>
         <p>{cus}</p>
    </div>
    
  );
}

export default RestroCard;
