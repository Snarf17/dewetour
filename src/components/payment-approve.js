import { useParams } from "react-router-dom"
import { Card,Container,Image,Table} from "react-bootstrap"
import NavHeader from './navbar'
import Footer from './footer'
import navStyle from './navbar.module.css'
import { NumericFormat } from "react-number-format"
import moment from "moment/moment"
// import logo from '../.png'




function PaymentApprove({data,total,count}){
    const params = useParams()
    const storage = JSON.parse(localStorage.getItem("name"))
    return(
        <>
            <NavHeader navStyle={navStyle.bgNavbar}/>
            {data.filter((list, index) => index + 1 == params.id).map((list, index) => (
            <Container className="d-flex flex-column" style={{margin:'10vh auto', padding:'30px'}}>
            <Card style={{padding:'50px'}} className="shadow">
            {/* <Card.Header className="border border-opacity-10">Quote</Card.Header> */}
            <div className="d-flex justify-content-between pe-5">
                <Image className="pb-2" src="../../images/icon-payment.png" width="250px"/>
                <div className="text-center">
                <h2 className="fw-semibold">Booking</h2>
                <span className="text-secondary">Saturday, 22 Juy 2020</span>
                </div>
            </div>
                <Card.Body className="pt-4 gap-5 d-flex">
                  <div>
                    <h4 className="fw-semibold">{list.title}</h4>
                    <span className="text-secondary">{list.country}</span>
                    <p className="p-payment text-bold">Waiting Approve</p>
                  </div>

                  <div className='d-flex gap-5 justify-content-between'>
                    <div className="d-flex flex-column gap-1">
                        <span className="text-secondary">Date Trip</span>
                        <div className='d-flex align-items-center pe-3 pb-4 gap-3'>
                            <Image src="../../icon/hotel.png"/>
                            <h6 className='pt-2 fw-semibold'>{moment(list.date).format('ll')}</h6>
                        </div>
                    
                        <span className="text-secondary">Accomodation</span>
                        <div className='d-flex align-items-center pe-5 gap-3' >
                            <Image src="../../icon/hotel.png"/>
                            <h6 className='pt-2 fw-semibold'>Hotel 4 Nights</h6>
                        </div>
                    </div>

                    <div className="d-flex flex-column gap-1">
                        <span className="text-secondary" >Transportation</span>
                        <div className='d-flex align-items-center pe-5 pb-4 gap-3'>
                            <Image src="../../icon/hotel.png"/>
                            <h6 className='pt-2 fw-semibold'>Qatar Airways</h6>
                        </div>
                    
                        <span className="text-secondary">Duration</span>
                        <div className='d-flex align-items-center   gap-3'>
                            <Image src="../../icon/hotel.png"/>
                            <h6 className='pt-2 fw-semibold'>6 Day 4 Night</h6>
                        </div>
                    </div>
                </div>
                <div style={{paddingLeft:'65px'}}>
                    <Image src="../../images/struk.png"/>
                    <p className="text-center text-secondary" style={{fontSize:'12px'}}>upload payment proof</p>
                </div>
                </Card.Body>
                <Table className='striped pt-5 '>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Full Name</th>
                            <th>Gender</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-secondary">
                            <td>1</td>
                            <td>{storage.fullname}</td>
                            <td>Male</td>
                            <td>{storage.number}</td>
                            <th className="text-dark">Qty : {count}</th>
                        </tr>
                        
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <th className="text-dark pt-3" colSpan={4} width="5px">Total : <span style={{color:'#FFAF00'}}>
                                <NumericFormat value={total} prefix="IDR. " thousandSeparator=',' displayType='text'/>
                            </span></th>
                    
                        
                    </tbody>
                </Table>
            </Card>
                {/* <Link to={`/details/${list.id}/payment`}   className="text-decoration-none pt-4" > */}
                    {/* <div className='w-100 d-flex justify-content-end'>
                        <Button className='btn-yellow' style={{padding:'10px 70px'}}>Pay</Button>
                    </div> */}
                {/* </Link> */}
            </Container>
            ))}
            <Footer />

        </>
    )
}

export default PaymentApprove 