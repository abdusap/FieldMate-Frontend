import React, { createContext, useState } from 'react'


export const SearchContext=createContext(null)
export function Context({children}) {
    const [search,setSearch]=useState('')
    const [sports,setSports] = useState('')
  return (
    <>
<SearchContext.Provider value={{search,setSearch,sports,setSports}}>
    {children}
    </SearchContext.Provider>
    </>
  )
}

