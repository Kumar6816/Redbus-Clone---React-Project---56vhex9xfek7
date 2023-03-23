import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { DataAppContext } from './tempelate/DataApp'


const Checkout = () => {
  const localContext=useContext(DataAppContext);
  const {appState,setAppState}=localContext;
  const {username,loginstatus}=appState;
  const navigate=useNavigate();
  useEffect(()=>{
    if(!loginstatus){
      navigate('/login');
    }
  })
  return (
    <div>Checkout</div>
  )
}

export default Checkout