import React, { createContext, useState } from 'react'
export const dataContext = createContext();

function Usercontext({children}) {

    const [title, setTitle] = useState('');
    const [addListing, setAddListing] = useState(false);
    const [addImage1, setAddImage1] = useState(null);
    const [addImage2, setAddImage2] = useState(null);
    const [addImage3, setAddImage3] = useState(null);
    const [price, setPrice] = useState(null);

    const value = {
        title,
        setTitle,
        addListing,
        setAddListing,
        addImage1,
        setAddImage1,
        addImage2,
        setAddImage2,
        addImage3,
        setAddImage3,
        price,
        setPrice
    }

  return (
    <div>
      <dataContext.Provider value={value}>
        {children}
      </dataContext.Provider>
    </div>
  )
}

export default Usercontext
