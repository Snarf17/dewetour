import { useParams, Link } from 'react-router-dom'
import Navbar from './navbar'
import Footer from './footer'
import { Container,Image, Table, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import navStyle from './navbar.module.css'
import { NumericFormat } from 'react-number-format';
import ModalWarningPay from './modalwarningpay';
import moment from 'moment/moment';



function Details({data,count,total,setTotal, idr, setIdr,handleMin,handlePlus}){
    const params = useParams();
    // const data = CardContent() 
    const [Show, setShow] = useState(false);

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const storage = JSON.parse(localStorage.getItem("name"))
    // const dataTrip = JSON.parse(localStorage.getItem("trip"))

    
    useEffect(() => {
        data.map((listDetails,index) => {
        //   let price = Number(listDetails.price)
        if (index + 1 == params.id) {
          setIdr(Number(listDetails.price))
          setTotal(Number(listDetails.price))
        }
      })},[])
    

    // const handleHarga = () => setCount(count - 1)
    return(
        <>
            <Navbar navStyle={navStyle.bgNavbar} />
            {data.filter((list,index) => index +1 == params.id).map((list,index) => (
            <Container className='p-5' >
                <div className='p-2'>
                    <h1 className='fw-semibold'>{list.title}</h1>
                    <span className='text-secondary fs-5'>{list.country}</span>
                </div>
                <div className='d-flex gap-3 flex-wrap pt-5'>
                    <Image className='w-100' style={{height:'400px', objectFit:'cover'}}  src="../../images/australia.png" alt='gambar'/>
                    <Image rounded style={{height:'175px', objectFit:'cover'}} src="../../images/korea.png" width="397px"  alt='gambar'/>
                    <Image rounded style={{height:'175px', objectFit:'cover'}} src="../../images/jepang.png" width="397px"  alt='gambar'/>
                    <Image rounded style={{height:'175px', objectFit:'cover'}} src="../../images/jakarta.png" width="397px" alt='gambar'/>
                </div>
                <h4 className='fw-semibold pt-5 pb-3'>Information Trip</h4>
                <div className='d-flex justify-content-between'>
                    <div>
                        <span className="text-secondary">Accomodation</span>
                        <div className='d-flex align-items-center gap-3'>
                            <Image src="../../icon/hotel.png"/>
                            <h5 className='pt-2 fw-semibold'>{list.accomodasi}</h5>
                        </div>
                    </div>
                    <div>
                        <span className="text-secondary" >Transportation</span>
                        <div className='d-flex align-items-center gap-3'>
                            <Image src="../../icon/pesawat.png"/>
                            <h5 className='pt-2 fw-semibold'>{list.transport}</h5>
                        </div>
                    </div>
                    <div>
                        <span className="text-secondary">Eat</span>
                        <div className='d-flex align-items-center gap-3'>
                            <Image src="../../icon/meal.png"/>
                            <h5 className='pt-2 fw-semibold'>{list.eat}</h5>
                        </div>
                    </div>
                    <div>
                        <span className="text-secondary">Duration</span>
                        <div className='d-flex align-items-center gap-3'>
                            <Image src="../../icon/time.png"/>
                            <h5 className='pt-2 fw-semibold'>{list.day} Day {list.month} Night</h5>
                        </div>
                    </div>
                    <div>
                        <span className="text-secondary">Date Trip</span>
                        <div className='d-flex align-items-center gap-3'>
                            <Image src="../../icon/calendar.png"/>
                            <h5  className='pt-2 fw-semibold'>{moment(list.date).format('ll')}</h5>
                        </div>
                    </div>
                </div>
                <div className='pt-5 pb-5'>
                    <h4>Description</h4>
                    <p className='text-secondary'>{list.desc}</p>
                </div>
                <Table className='pt-5 '>
                    <tbody>
                    <tr>
                            <td className='fw-semibold fs-4'><span style={{color:'#FFAF00'}}>
                            <NumericFormat value={list.price} prefix="IDR. " thousandSeparator=',' displayType='text'/>
                            </span> / Person
                            </td>
                            <td className='d-flex justify-content-end gap-3'>
                                <Button className='btn-yellow-pay' onClick={handlePlus}><Image src="../../icon/plus.png" width='15px'  /></Button>
                                    <h5 className='align-self-center pt-2'>{count}</h5>
                                <Button className='btn-yellow-pay' onClick={handleMin} ><Image src="../../icon/min.png" width='15px'/></Button>
                            </td>
                        </tr>
                        <tr>
                            <td className='fw-semibold fs-4'>Total</td>
                            <td className='text-end fw-semibold fs-4' style={{color:'#FFAF00'}}>
                                <NumericFormat value={total} prefix="IDR. " thousandSeparator=',' displayType='text'/>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                {storage !== null ? 
                 storage.admin === true ? 
                 "" 
                 
                 : 
                <Link to={`/payment/${params.id}`} className='text-decoration-none'>
                        <div className='w-100 d-flex justify-content-end pt-3'>
                            <Button className='btn-yellow'>Book Now</Button>
                        </div>
                </Link>
                : 
                <div className='w-100 d-flex justify-content-end pt-3'>
                    <Button className='btn-yellow' onClick={handleShow}>Book Now</Button>
                </div>
                }
            </Container>
            ))}
            <ModalWarningPay show={Show} handle={handleClose}/>
            <Footer />

        </>
    )
}

export default Details