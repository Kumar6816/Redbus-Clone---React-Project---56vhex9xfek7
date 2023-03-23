import React, { useContext, useEffect, useState } from 'react'
import { DataAppContext } from './DataApp'
import { useNavigate } from 'react-router-dom';
import Search from '../Search';
import {  ListGroup } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const List = () => {
  const localContext=useContext(DataAppContext);
  const {appState,setAppState}=localContext;
  const {username,loginstatus,searchfrom,searchto,searchdate}=appState;
  

  const navigate=useNavigate();
   useEffect(()=>{
    if(!loginstatus){
      navigate('/login');
    }
    
   })
   const [buses,setbuses]=useState([]);
   const callapi=async()=>{
      const responce=await fetch('https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses');
      const data=await responce.json();
      console.log(data);
      setbuses(data);
   }
   useEffect(()=>{
    callapi();
   },[]);
  return (
    <div>
      <Search/>
      <br></br>
      
      <ListGroup varient="flush" >
      
        <ListGroup.Item >
        <Row>
          <Col>BusName</Col>
          
          <Col>ArrivalTime</Col>
          <Col>DepartureTime</Col>
          <Col>TicketPrice</Col>


          
        </Row>
      </ListGroup.Item>
      {
        buses && buses.map((item,index) => (
         
      <ListGroup.Item >
        <Row>
          <Col>{item.busName}</Col>
          
          <Col>{item.arrivalTime}</Col>
          <Col>{item.departureTime}</Col>
          <Col>{item.ticketPrice}</Col>


          
        </Row>
      </ListGroup.Item>
     
        ))
      }
      </ListGroup>
    </div>
  )
}

export default List