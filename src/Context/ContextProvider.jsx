import React, { useState } from 'react'
import CategoryContext from './context'

const ContextProvider = ({children}) => {


  const [Category,SetCategory] =  useState("");

  const HandleClick = (idx,items) =>{
    SetCategory(items)
  }

  return (
    <CategoryContext.Provider value={{
      Category,
      HandleClick
  
      }}>
     {children}
    </CategoryContext.Provider>
  )
}

export default ContextProvider