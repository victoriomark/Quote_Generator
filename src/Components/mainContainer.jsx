import React, { useContext, useEffect, useState } from "react";
import CategoryContext from "../Context/context";
import SidBar from "../Style/Style.module.css";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
const BoxContainer = () => {
   const ApiKey = "0+MqXToHwjmS0i7+RVhE1Q==BhuNr2wmhrzkujvH";
   const Url = `https://api.api-ninjas.com/v1/quotes?category=`;
   const Id = uuidv4();

   const { Category } = useContext(CategoryContext);
   const [Quotes, SetData] = useState([]);
   // Get data from API

   useEffect(() => {
      axios
         .get(Url + Category, {
            headers: { "X-Api-Key": ApiKey },
            contentType: "application/json",
         })
         .then((Data) => {
            SetData(Data.data);
         });
   }, [Category]);


   return (
      <div className={ ` ${SidBar.Showdows} container  d-flex flex-column gap-3 p-5  rounded-3 `}>
         {
            Quotes.length === 0 ? (<p className="text-light">Loading...</p>) : 
         
         Quotes.map((data) => 
            (
               <>
                  <h6 className={` card-title text-light `}>
                     {data.category.toUpperCase()}
                  </h6>
                  <div className='card-body col-lg-5'>
                     <h6 className='card-text text-secondary'>{data.quote}</h6>
                     <h5 className='text-secondary'>
                        <span className={SidBar.TextColor}>Author:</span> {data.author}
                     </h5>
                  </div>
               </>
            )
         )
         
         }
      </div>
   );
};

export default BoxContainer;
