import React, { useContext } from "react";
import SidBar from "../Style/Style.module.css";
import { useState } from "react";
import CategoryContext from "../Context/context";
const SideBar = () => {
   const [Finters, SetFelter] = useState([]);
   
   const { HandleClick } = useContext(CategoryContext)


   const categories = [
      "age",
      "alone",
      "amazing",
      "anger",
      "architecture",
      "art",
      "attitude",
      "beauty",
      "best",
      "birthday",
      "business",
      "car",
      "change",
      "communication",
      "computers",
      "cool",
      "courage",
      "dad",
      "dating",
      "death",
      "design",
      "dreams",
      "education",
      "environmental",
      "equality",
      "experience",
      "failure",
      "faith",
      "family",
      "famous",
      "fear",
      "fitness",
      "food",
      "forgiveness",
      "freedom",
      "friendship",
      "funny",
      "future",
      "god",
      "good",
      "government",
      "graduation",
      "great",
      "happiness",
      "health",
      "history",
      "home",
      "hope",
      "humor",
      "imagination",
      "inspirational",
      "intelligence",
      "jealousy",
      "knowledge",
      "leadership",
      "learning",
      "legal",
      "life",
      "love",
      "marriage",
      "medical",
      "men",
      "mom",
      "money",
      "morning",
      "movies",
      "success",
   ];
   const HandleSearch = (event) => {
      const SearchTerm = event.target.value.toLowerCase();
      const Filtered = categories.filter((category) =>
         category.toLowerCase().includes(SearchTerm)
      );
      SetFelter(Filtered);
   };

        
   return (
      <>
         <div
            id={SidBar.SideBarHide}
            className='p-1 p-3 shadow-sm  rounded-3 shadow-sm '
         >
            <input
               onChange={HandleSearch}
               className='form-control'
               type='text'
               placeholder='Searh Catergory'
            />
            <ul className={`${SidBar.SideBar} list-group p-2 mt-2 `}>
               {Finters.length > 0
                  ? Finters.map((items, idx) => (
                       <li onClick={() =>HandleClick(idx,items)} className='text-light' key={idx}>
                          {items}
                       </li>
                    ))
                  : categories.map((items, idx) => (
                       <li onClick={() =>HandleClick(idx,items)} className='text-light' key={idx}>
                          {items}
                       </li>
                    ))}
            </ul>
         </div>
      </>
   );
};

export default SideBar;
