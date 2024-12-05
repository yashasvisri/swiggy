import { useState,useEffect } from "react";

const RestroMenuPage=()=>{
    const [resInfo, setResInfo ]= useState([]);

 useEffect(()=>{
    fetchMenu();
 }, []);
 const fetchMenu= async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=57903&catalog_qa=undefined&submitAction=ENTER");
    const json= await data.json();
    console.log(json);
    setResInfo(json.data.cards[2].card?.card?.info)

 };
 


 const {name, cuisines, costForTwo, city, avgRating,cloudinaryImageId}= resInfo;

    return(
        <div className="Menu">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt={resInfo.name}/>
            <h1>{name}</h1>
            
            <h2>{city}</h2>
            <h2>{cuisines}</h2>
            <h2>{avgRating}</h2>
            <h2>{costForTwo}</h2>



        </div>
    );
};
export default RestroMenuPage;