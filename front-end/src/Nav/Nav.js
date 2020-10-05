import React from 'react';
import {NavItems} from './NavItems';
import "./Nav.style.css";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';


const Navs = props =>{
    const nav = NavItems.map((item, i)=>{
        return (
          <Nav className='justify-content-end' key={i} >
            <Nav.Item  >
              <Nav.Link href={item.url}>{item.title}</Nav.Link>
            </Nav.Item>
          </Nav>
        )
    })

    return (
      <div className='nav-box'>
        <Navbar className="justify-content-end">
          <Navbar.Brand className="logo" href="#home">Logo</Navbar.Brand>
          {nav}
        </Navbar>
      </div>
    )
};

export default Navs;