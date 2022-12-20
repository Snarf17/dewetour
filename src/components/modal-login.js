// import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function ModalLogin({show, handle}) {
    const navigate = useNavigate()
    const [login, setLogin] = useState({
        email: "",
        password: "",
    })

     const handleOnChange = (e) => {
      setLogin({
        ...login,
        [e.target.name]: e.target.value,
      })}

      const handleOnSubmit = (e) =>{
        e.preventDefault()  
        
        const storage =  JSON.parse(localStorage.getItem("user"))

        storage.map(data => {
          if (login.email === data.email && login.password === data.password) {
              localStorage.setItem('name', JSON.stringify(data))
              Swal.fire({
                  icon: 'success',
                  title: 'Yoooi,,',
                  text: ' Kamu Sudah Bisa Login',
              })
              handle()  
                setInterval(() => {
                  navigate(0)
                }, 1000);
              
          }else{
              Swal.fire({
                  icon: 'warning',
                  title: 'Yoooi,,',
                  text: 'Kamu gagal login',
              })
          }

        })

    }



    

  return (
    <>

      <Modal show={show} onHide={handle} centered size="md"  >
        <div className='d-flex justify-content-between'>
            <Image src='../../images/palm.png' width='100px'/>
            <Image src='../../images/bunga.png' width='100px'/>
        </div>
        <Modal.Title className='text-center  fw-semibold pb-4 fs-1'>Login</Modal.Title>
        <Modal.Body className='modal-login'>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleOnChange}
                value={login.email}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={login.password}
                name="password"
                onChange={handleOnChange}
                type="password"
              />
            </Form.Group>
          <Button className='btn-yellow w-100' type='submit'>
            Login
          </Button>
          </Form>
          <div className='text-center pt-3'>
          <span className=' text-secondary'>Don't have an account? ? Klik Here</span>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalLogin