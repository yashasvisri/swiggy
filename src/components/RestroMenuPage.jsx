import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const RestroMenuPage=()=>{
    const [resInfo, setResInfo ]= useState(null);

 useEffect(()=>{
    fetchMenu();
 }, []);
 const fetchMenu= async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.6483858&lng=84.9075919&restaurantId=182308&catalog_qa=undefined&submitAction=ENTER");
    const json= await data.json();
    
    setResInfo(json.data);

 };


 if(resInfo===null) return <Shimmer/>;
 


 const restaurantInfo = resInfo?.cards[2]?.card?.card?.info || {};
 const { name,   city } = restaurantInfo;
 const itemCards =
  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];

 console.log(itemCards)
 
 

 

 
 

 

    return(
        <div className="Menu">
            
            <h1>{name}</h1>
            
            <h2>{city}</h2>
            <h1>Menu</h1>
            <ul>
            {itemCards.map(item=><li>{item.card.info.name}</li>)}
            
                
            </ul>

            



        </div>
    );
};
export default RestroMenuPage;