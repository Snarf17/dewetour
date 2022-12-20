// import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// import ModalLogin from './modal-login';
// import { useNavigate } from 'react-router-dom';

function ModalRegister({register, handleregister}) {
    const navigate = useNavigate()
    const [input, setInput] = useState({
      fullname: "",
      email: "",
      password: "",
      number: "",
      admin: false,
    })
    
    // console.log(input)
    const handleOnChange = (e) => {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      })}
      
      const handleSubmit = (e) => {
        e.preventDefault()
        
        let existEntries = JSON.parse(localStorage.getItem("user"))
        if(existEntries == null) existEntries = []
        localStorage.setItem("user", JSON.stringify(input))
        existEntries.push(input)
        localStorage.setItem("user", JSON.stringify(existEntries))
        
        Swal.fire({
          icon: 'success',
          title: 'Yoooi,,',
          text: ' Kamu Sudah Bisa Login',
        })
        
        handleregister()
        setInterval(() => {
          navigate(0)
        }, 1000);
        // navigate('/')
      }
      // useEffect(() => {
      // if (input.fullname == "frans") {
      //   alert('Behasil')
      // }
      // },[input])

    // console.log(handleSubmit)
  return (
    <>

      <Modal show={register} onHide={handleregister} centered size="md"  >
        <div className='d-flex justify-content-between'>
            <Image src='../../images/palm.png' width='100px'/>
            <Image src='../../images/bunga.png' width='100px'/>
        </div>
        <Modal.Title className='text-center fw-semibold pb-4 fs-1'>Register</Modal.Title>
        <Modal.Body className='modal-login'>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                name='fullname'  
                value={input.fullname}
                onChange={handleOnChange}
                type="text"
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name='email'
                value={input.email}
                onChange={handleOnChange}
                type="email"
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                name='password'
                value={input.password}
                onChange={handleOnChange}
                type="password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Number</Form.Label>
              <Form.Control
                name='number'
                value={input.number}
                onChange={handleOnChange}
                type="number"
                required
              />
            </Form.Group>
          <Button type='submit' className='btn-yellow w-100' >
            Register
          </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalRegister