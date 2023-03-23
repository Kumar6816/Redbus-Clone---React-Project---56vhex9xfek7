import React, { useContext } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DataAppContext } from './DataApp';
import { useNavigate } from 'react-router-dom';


const Header = () => {

  const localContext=useContext(DataAppContext);
  const {appState,setAppState}=localContext;
  const {username,loginstatus}=appState;
  const navigate=useNavigate();

  const logoutFn=()=>{
    setAppState({
      ...appState,
      loginstatus:false,
      username:'',
    })
    navigate('/home');
  }
  return (
    <div >Header
        <Row>
          <Col className='bg-success'>
          <Navbar bg="light" variant="light">
        <Container>
          { loginstatus ?
          <>
          {loginstatus && <span>Hii {username}</span>}
           <Nav.Link onClick={logoutFn} >Logout</Nav.Link>
          </>    :
          <>
          <Nav className="me-auto">
            <Nav.Link  ><Link to='/register'>register</Link></Nav.Link>
            <Nav.Link ><Link to='/login' >login</Link></Nav.Link>
            
          </Nav>
          </>}
        </Container>
      </Navbar>
          </Col>
       </Row>

    </div>
    
  )
}

export default Header