import './style.css'
import { Link }  from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';
// import Details  from './details';
// import { CardContent } from './data'
import Navbar from './navbar';
import Footer from './footer';
import { Button } from 'react-bootstrap';
import navStyle from './navbar.module.css'
import { NumericFormat } from 'react-number-format';


function IncomeTrip() {
//   const CardHeader = [
//     {
//       image: "./icon/persen.png",
//       tittle: "Best Price",
//       text: "Best Price Guarantee",
//     },
//     {
//       image: "./icon/hand.png",
//       tittle: "Travellers Love Us",
//       text: "A small river named Duren flows by their place and supplies",
//     },
//     {
//       image: "./icon/human.png",
//       tittle: "Best Travel Agent",
//       text: "A small river named Duren flows by their place and supplies",
//     },
//     {
//       image: "./icon/cs.png",
//       tittle: "Our Dedicated Support",
//       text: "A small river named Duren flows by their place and supplies",
//     }
//   ]

const storage = JSON.parse(localStorage.getItem("trip"))





// const Data = CardContent()
// console
  return (

    <>
    <Navbar navStyle={navStyle.bgNavbar} />
    <Container>
      <div className='judul d-flex justify-content-between'>
        <h1 className='fw-semibold'>Group Tour</h1>
        <Link to="/add-trip" className="text-decoration-none">
            <Button className='btn-yellow'>Add Trip</Button>
        </Link>
      </div>

      <div className=' d-flex gap-4 justify-content-center flex-wrap p-3'>
      {storage.map((dataTrip,index) => (
      <Link to={`/details/${index + 1}`} className="text-decoration-none">
        <Card style={{ width: '21rem',height:"21rem", padding:'7px', marginBottom:'40px'}}>
            <Card.Img variant="top" src="../../images/jakarta.png" rounded/>
            <Card.Body>
                <Card.Title className="fw-semibold text-dark" >{dataTrip.title}</Card.Title>
                <div className='d-flex justify-content-between'>
                <p style={{color:'#FFAF00'}}>
                <NumericFormat value={dataTrip.price} prefix="IDR. " thousandSeparator="," displayType='text'/>
                
                </p>
                <p className='text-secondary'>{dataTrip.country}</p>
                </div>
           </Card.Body>
          </Card>
      </Link>
      ))}
      </div>

      </Container>
      <Footer/>
    </>
    
  
    
  );
}


export default IncomeTrip;