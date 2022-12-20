import './style.css'
import { Link }  from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
// import Details  from './details';
// import { CardContent } from './data'
import { NumericFormat } from 'react-number-format';


function Content() {
  const CardHeader = [
    {
      image: "./icon/persen.png",
      tittle: "Best Price",
      text: "Best Price Guarantee",
    },
    {
      image: "./icon/hand.png",
      tittle: "Travellers Love Us",
      text: "A small river named Duren flows by their place and supplies",
    },
    {
      image: "./icon/human.png",
      tittle: "Best Travel Agent",
      text: "A small river named Duren flows by their place and supplies",
    },
    {
      image: "./icon/cs.png",
      tittle: "Our Dedicated Support",
      text: "A small river named Duren flows by their place and supplies",
    }
  ]


  const renderingCardHeader = (card) => {
    return(
        <Card style={{ width: '250px',}} className="shadow" >
          <Card.Body className='text-center p-5'>
          <Card.Title className="pb-4" ><Image src={card.image}/></Card.Title>
          <Card.Subtitle className="mb-2 fw-semibold">{card.tittle}</Card.Subtitle>
          <Card.Text>
            {card.text}
          </Card.Text>
          </Card.Body>
        </Card>
      
    )
  }

  // const renderingCardContent = (card) => {
  //   return (
  //         <Card style={{ width: '21rem',height:"21rem", padding:'7px', marginBottom:'40px'}}>
  //           <Card.Img variant="top" src={card.image} rounded/>
  //           <Card.Body>
  //               <Card.Title className="fw-semibold" >{card.tittle}</Card.Title>
  //               <div className='d-flex justify-content-between'>
  //               <p style={{color:'#FFAF00'}}>{card.idr}</p>
  //               <p className='text-secondary'>{card.city}</p>
  //               </div>
  //          </Card.Body>
  //         </Card>
  //   )
  // }
  // // const renderingCardContent = (card) => {
  //   return(

  //     <Card style={{ width: '21rem',height:"21rem", padding:'7px', marginBottom:'40px'}}>
  //     <Card.Img variant="top" src={card.image} rounded/>
  //       <Card.Body>
  //           <Card.Title className="fw-semibold" >{card.tittle}</Card.Title>
  //           <div className='d-flex justify-content-between'>
  //           <p style={{color:'#FFAF00'}}>{card.idr}</p>
  //           <p className='text-secondary'>{card.city}</p>
  //           </div>
  //       </Card.Body>
  //     </Card>
      
    
    
  //   )
  // }
  // const Data = CardContent()
  const storage = JSON.parse(localStorage.getItem("trip"))
  return (

    <>
    <Container>
      <div className='card-fly d-flex justify-content-between p-5'>
        {CardHeader.map(renderingCardHeader)}
      </div>
      <div className='judul text-center'>
        <h1 className='fw-semibold'>Group Tour</h1>
      </div>

      <div className=' d-flex gap-5 justify-content-center flex-wrap'>

      {storage.map((card, index) => (
      <Link to={`/details/${index + 1}`} className="text-decoration-none">
        <Card style={{ width: '21rem',height:"21rem", padding:'7px', marginBottom:'40px', border:"none"}} className="shadow">
            <Card.Img variant="top" src="../../images/labuanbajo.png" rounded/>
            <Card.Body>
                <Card.Title className="fw-semibold text-dark" >{card.title}</Card.Title>
                <div className='d-flex justify-content-between'>
                <p style={{color:'#FFAF00'}}>
                <NumericFormat value={card.price}
                  prefix="IDR. " thousandSeparator=',' displayType='text'/>
                </p>
                <p className='text-secondary'>{card.country}</p>
                </div>
           </Card.Body>
          </Card>
      </Link>
      ))}
      </div>

      </Container>
    </>
    
  
    
  );
}


export default Content;