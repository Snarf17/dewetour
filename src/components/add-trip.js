import { useState } from 'react';
import { Button,Form,Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import NavHeader from './navbar';
import navStyle from './navbar.module.css'





function AddTrip() {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        title: "",
        country: "",
        accomodasi: "",
        transport: "",
        eat: "",
        day: "",
        month: "",
        date: "",
        price: Number("0"),
        quota: "",
        desc: "",
    })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    console.log(input)
    const handleSubmit = (e) => {
        e.preventDefault()

        let existEntries = JSON.parse(localStorage.getItem("trip"))
        if(existEntries == null) existEntries = []
        localStorage.setItem("trip", JSON.stringify(input))
        existEntries.push(input)
        localStorage.setItem("trip", JSON.stringify(existEntries))
        

        navigate("/income-trip")
    }
        
    console.log(input);
  return (
    <>
    <NavHeader navStyle={navStyle.bgNavbar}/>
    <Container> 
        <div className='shadow p-5 mt-5'>
        <h2 className='pt-5 fw-semibold'>Add Trip</h2>
        <Form className='p-3' onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title Trip</Form.Label>
            <Form.Control  value={input.title} name="title" type="text" placeholder="Enter text"  onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Country</Form.Label>
            <Form.Select value={input.country} name="country" onChange={handleChange} >
                <option disabled>-- Select Country --</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Australia">Australia</option>
                <option value="Arab">Arab</option>
                <option value="Jepang">Jepang</option>
            </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasictext">
            <Form.Label>Accomodation</Form.Label>
            <Form.Control  value={input.accomodasi} name="accomodasi" type="text" placeholder="Enter text"  onChange={handleChange} />
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasictext">
            <Form.Label>Transportation</Form.Label>
            <Form.Control  value={input.transport} name="transport" type="text" placeholder="Enter text"  onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasictext">
            <Form.Label>Eat</Form.Label>
            <Form.Control  value={input.eat}  name="eat" type="text" placeholder="Enter text"  onChange={handleChange} />
        </Form.Group>
        <Form.Label>Duration</Form.Label>
        <div className='d-flex gap-3'>
            <Form.Group className="col-md-3 d-flex align-items-center gap-3">
                <Form.Control type="number" class="form-control" id="inputtext4" name='day' value={input.day} onChange={handleChange} />
                <Form.Label for="inputtext4" class="form-label">Day</Form.Label>
            </Form.Group>
            <Form.Group className="col-md-3 d-flex align-items-center gap-3">
                <Form.Control type="number" class="form-control" id="inputPassword4" name='month' value={input.month} onChange={handleChange} />
                <Form.Label for="inputPassword4" class="form-label">Month</Form.Label>
            </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="formBasictext">
            <Form.Label>Date Trip</Form.Label>
            <Form.Control type="date" placeholder="Enter text" name='date' value={input.date} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasictext">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Enter text" name='price' value={input.price} onChange={handleChange} />
        </Form.Group>
        <Form.Group>
            <Form.Label for="inputPassword4" class="form-label">Quota</Form.Label>
            <Form.Control type="text" class="form-control" name="quota" value={input.quota} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasictext">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Enter email" name='desc' value={input.desc} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3 col-md-3" controlId="formBasicEmail">
            <Form.Label>Upload</Form.Label>
            <Form.Control type="file" name="image" value={input.image} onChange={handleChange} placeholder="Enter email" />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group> */}
        <div className='text-center pt-3'>
        <Button style={{padding:'6px 90px'}} className='btn-yellow' type="submit">
            Submit
        </Button>
        </div>
        </Form>
        </div>
    </Container>
    <Footer/>
    </>
  );
}

export default AddTrip