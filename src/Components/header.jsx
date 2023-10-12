import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from 'react-icons/fa'
import { myContext } from '../Context/context';
const Header = () => {

  const contextValue=useContext(myContext)
  const{cart}=contextValue

  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand href="#">ECommerce</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/">Home</Nav.Link>
        
           
          <Nav.Link href="/login" >
            Login 
          </Nav.Link>
        </Nav>
        <FaShoppingCart /><sup>{cart.length}</sup>
      </Navbar.Collapse>
    </Container>
  </Navbar>
      
    </div>
  )
}

export default Header
