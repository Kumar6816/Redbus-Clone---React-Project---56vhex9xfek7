import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './tempelate/Header';
import Footer from './tempelate/Footer';
import MenuBar from './tempelate/MenuBar';
import Login from './tempelate/Login';
import Register from './tempelate/Register';
import Notfound from './tempelate/Notfound';
import DataApp from './tempelate/DataApp';
import List from './tempelate/List';
import Checkout from './Checkout';
import Home from './Home';


function App() {
  return (
    <div >
      saurabh
      <BrowserRouter>
      <DataApp>
       <Container>
        <Header/>
        <MenuBar/>
       {/* <Row>
          <Col>1 of 1</Col>
       </Row> */}
            <Row>
            <Col> 
             <Routes>
             <Route path='/home' element={<Home/>} />
             <Route path='/' element={<Home/>} />
                 <Route path='/header' element={<Header/>} />
                 <Route path='/login' element={<Login/>} />
                 <Route path='/register' element={<Register/>} />
                 <Route path='/checkout' element={<Checkout/>} />
                 <Route path='' element={<Register/>} />
                 <Route path='/*' element={<Notfound/>} />
                 
                 <Route path='/list*' element={<List/>} />
             </Routes>
             </Col>
             </Row> 
         <Footer/>
        </Container>
        </DataApp>
      </BrowserRouter>
    </div>
  )
}

export default App;
