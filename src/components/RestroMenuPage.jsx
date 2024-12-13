import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestroMenuPage=()=>{
    const [resInfo, setResInfo ]= useState(null);
    const {resId}= useParams();

 useEffect(()=>{
    fetchMenu();
 }, []);
 const fetchMenu= async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.6483858&lng=84.9075919&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
    const json= await data.json();
    
    setResInfo(json.data);

 };


 if(resInfo===null) return <Shimmer/>;
 


 const restaurantInfo = resInfo?.cards[2]?.card?.card?.info || {};
 const { name,   city } = restaurantInfo;
 const itemCards =
  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];

 console.log(itemCards)
  const topPicksCarousel =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel || [];
  
 
 

 

 
 

 

    return(
        <div className="Menu">
            
            <h1>{name}</h1>
            
            <h2>{city}</h2>
            <div className="carousel">
        {topPicksCarousel.map((item) => (
          <div key={item.dish.info.id} className="carousel-item">
        
            
            <h3>{item.dish.info.name}</h3>
            <p>{item.dish.info.description}</p>
            <p>Price: ₹{item.dish.info.price / 100}</p>
          </div>
        ))}
      </div>

            

            <ul>
            {itemCards.map(item=><li>{item.card.info.name}</li>)}
            
                
            </ul>

            



        </div>
    );
};
export default RestroMenuPage;