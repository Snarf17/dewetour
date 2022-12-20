import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { Button, Container, Nav, Navbar, Image, Dropdown } from 'react-bootstrap';
import logo from '../Icon.png'
import ModalLogin from './modal-login';
import ModalRegister from './modal-register';
import { Link, useNavigate} from 'react-router-dom';

import Swal from 'sweetalert2'             

function NavHeader({navStyle}) {
  // const params = useParams()
  // const data = CardContent()
  const navigate = useNavigate()
  const storage = JSON.parse(localStorage.getItem("name"))
  // const storageUser = localStorage.getItem("user")
  // console.log(storage);

  const handleLogout = () =>{
    // e.preventDefault()
    localStorage.removeItem("name")
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Yooi, anda logout',
      showConfirmButton: false,
      timer: 1500 
    })
    setInterval(() => {
      navigate(0)
    }, 1000);
  }

  // let gambar = "./images/Icon.png"
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [register, setRegister] = useState(false);

  const handleCloseR = () => setRegister(false);
  const handleShowR = () => setRegister(true);


    return(
      <>
      <Navbar className={navStyle} >

      <Container>
        <Link to="/">
          <Navbar.Brand href="#"><Image src={logo} alt='test' /></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
           
            <Nav.Link href="#action1"></Nav.Link>
          </Nav>
          {storage !== null ? 
          <div className='d-flex align-items-center'>
          {storage.admin === true ? 
          <div className='d-flex align-items-center'>
          <h5 style={{color:'#FFAF00'}} className="text-capitalize fw-semibold pt-3">{storage.fullname}</h5>
          <Dropdown>
          <Dropdown.Toggle className='bg-transparent' style={{border: 'none'}} >
            <Image src='../../icon/admin.png' width="60px"/>
          </Dropdown.Toggle>
          <Dropdown.Menu>
          <Link to="/income-trip" className='text-decoration-none'>
            <Dropdown.Item href="#/action-2"><Image src='../../icon/bill.png' className='pe-3'/>Pay</Dropdown.Item>
          </Link>
          <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>
              <Image src='../../icon/logout.png' className='pe-3'/>Log-out
            </Dropdown.Item>
          </Dropdown.Menu>
          </Dropdown> 
          </div>
          : 
          <div className='d-flex align-items-center'>
          <h5 style={{color:'#FFAF00'}} className="text-capitalize">{storage.fullname}</h5>
          <Dropdown>
            <Dropdown.Toggle className='bg-transparent' style={{border: 'none'}} >
              <Image src='../../icon/mask.svg' width="60px"/>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Link to="/profile" className="text-decoration-none">
                <Dropdown.Item href="/"><Image src='../../icon/user.png' className='pe-3'/>Profile</Dropdown.Item>
              </Link>
              
                <Dropdown.Item href="#/action-2"><Image src='../../icon/bill.png' className='pe-3'/>Pay</Dropdown.Item>
            
            <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout}>
                <Image src='../../icon/logout.png' className='pe-3'/>Log-out
              </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            </div>
          }
          
          </div>
          :
          <div>
            <Button className="btn-outline" onClick={handleShow}>Login</Button>
            <Button className="btn-yellow" onClick={handleShowR}>Register</Button>
          </div>
          }
        </Navbar.Collapse>
      </Container>

      </Navbar>
      <ModalLogin show={show} handle={handleClose}/>
     <ModalRegister register={register} handleregister={handleCloseR}/>
      </>
      
    )

  
}


export default NavHeader