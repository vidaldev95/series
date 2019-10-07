import React, {useState} from 'react'
import { Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarToggler } from 'reactstrap'
import { Link } from 'react-router-dom'

const Header = () =>{
    const [open, setOpen] = useState(false)
    const toggle = () => {
      setOpen(!open)
    }
    return(
      <Navbar color='light' light expand='md'>
        <NavbarBrand tag={Link} to="/">Séries</NavbarBrand>
        <NavbarToggler onClick={toggle} />
          <Collapse isOpen={open} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink className='item-menu' tag={Link} to='/generos'>Gêneros</NavLink>
                <NavLink className='item-menu btn btn-info' tag={Link} to='/generos/novo'>Novo Gênero</NavLink>
              </NavItem>
            </Nav> 
          </Collapse>
      </Navbar>
    )
  }

export default Header