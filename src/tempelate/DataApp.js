import React, { useEffect, useState } from 'react'

export const DataAppContext=React.createContext();

const DataApp = (props) => {
    const initialdata={
        loginstatus:false,
        username:'',
        searchfrom:'',
        searchto:'',
        searchdate:'',

    }
    const [appState, setAppState]=useState(initialdata);

    useEffect(()=>{
        console.log('context data');
    })
  return (
    <div>
         <DataAppContext.Provider value={{appState, setAppState }}>
                {props.children}
            </DataAppContext.Provider>
    </div>
  )
}

export default DataApp