import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Homepage/Homepage.css'
import { useNavigate } from 'react-router-dom';
import Signinpage from './Signinpage';
import Logo from '../images/Logo.png' 
function Navbarhome() {
  const navigate =useNavigate()
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar " fixed='top' >
      <Container>
        <img src={Logo} alt='logo' style={{height:'50px',width:'50px'}}/>
        <Navbar.Brand >Trip<sub>ty</sub></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto" >
            <Nav.Link onClick={()=>navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={()=>navigate('/about')} href="">About Us</Nav.Link>
            <NavDropdown title="places" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" onClick={()=>navigate('/ooty')}>Ooty</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" onClick={()=>navigate('/yercaud')}>Yercaud</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" onClick={()=>navigate('/kodaikanal')}>Kodaikanal</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" onClick={()=>navigate('/kerala')}>Kerala</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" onClick={()=>navigate('/kollihills')}>Kolli Hills</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" onClick={()=>navigate('/coimbatore')}>Coimbatore</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown title="Adventure" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" onClick={()=>navigate('/sufringplaces')}>Sufring</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" onClick={()=>navigate('/skydiving')}>Skydiving</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" onClick={()=>navigate('/sikiing')}>Sikiing</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
        
          </Nav>
          <Nav>
            <Signinpage/>
            {/* <div style={{paddingLeft:'20px',paddingTop:'15px'}}>
            <Nav.Link onClick={() => navigate('/adminpage')} >Adminpage</Nav.Link>
            </div> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarhome;