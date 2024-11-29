
import RestroCard from './RestroCard'

import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';



const Body = () => {
  
  const [ListOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestro, setfilterRestro]= useState([]);
  const [searchText, setsearchText]= useState("");
  


  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    setListOfRestaurant(json?.data.cards[2].card.card.gridElements.infoWithStyle.restaurants); 
    setfilterRestro(json?.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
  };
  

  return ListOfRestaurant.length===0 ? <Shimmer/>: (
    <div className="body">
      <div className='search'>
        <input type='text' className='search-box' value={searchText} onChange={(e)=>{setsearchText(e.target.value);}}/>
        <button  className ="btn-name" onClick={()=>{
          const filtered= ListOfRestaurant.filter((res)=>res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
          setfilterRestro(filtered);
          console.log(filtered);
          
        }

        }> search</button>
      </div>

      <div className="res-container">
        {filteredRestro.map((restaurant, index) => (
          <RestroCard key={index} data={restaurant} /> 
        ))}
      </div>
    </div>
  );
};

export default Body;
