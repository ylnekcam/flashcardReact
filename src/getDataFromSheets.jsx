import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";
import FlashCardList from './flashCardList'
import ShowLoader from "./loader";

export default function GetDataFromSheets() {
  const [data, setData] = useState([]);
  const [loading,setloading]=useState(true);
  
  useEffect(() => {
   
    //setTimeout(() =>  setloading(true), 8000)

    Tabletop.init({
      key: "1cLmzzwk_j2vT3AK_GcGEThuQW75xyWYpDTdjS1Q0oGQ",
      simpleSheet: true, 
       })
      .then((data) => setData(data))
      .catch((err) => console.warn(err)); 
      setTimeout(() =>  setloading(false), 2000) 
        
  }, []);

function fetchingData(loading) {
     if (loading) {    
      return ShowLoader(); 
    } 
    return <FlashCardList flashcards={data}/> ;   
    
    }
  
       
 
return (  fetchingData(loading) );

}
