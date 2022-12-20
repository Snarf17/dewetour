import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import { CardContent } from './components/data';
// import Home from './components/home';
import Details from './components/details'
import Payment from './components/payment'
import ListTransaction from './components/list-transaction'
import PaymentApprove from './components/payment-approve';
import IncomeTrip from './components/income-trip';
import AddTrip from './components/add-trip';
import PrivateRoute from './components/privateRoute';
import Profile from './components/profile'
import Home from './components/home'
import {  useState } from 'react';
import PrivateUser from './components/privateUser';
// import ListTransaction from './components/list-transaction';
// import { useParams } from 'react-router-dom';


function App() {
  // const params = useParams()
  const Data = CardContent()
  const storage = JSON.parse(localStorage.getItem("name"))
  const dataTrip = JSON.parse(localStorage.getItem("trip"))

  const [count, setCount] = useState(1)
  const [total, setTotal] = useState()
  const [idr, setIdr] = useState(0)
  
  // console.log(total);
  const handlePlusCount = () => {
    setCount(count + 1)
    setTotal(total + idr)
  }
  
  
  const handleMinCount = () => {
    if (count > 1) {
      setCount(count - 1)
      setTotal(total - idr)
      }
  }

  
      
      
      
      // console.log(storage);
      return (
        <>
        
    <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/details/:id" element={<Details
       data={dataTrip}
       count={count}
       setCount={setCount}
       total={total}
       setTotal={setTotal}
       idr={idr}
       setIdr={setIdr} 
       handleMin={handleMinCount}
       handlePlus={handlePlusCount}
       />} />

      {/* USER */}
      <Route element={<PrivateUser login={storage}/>} >
        <Route exact path="/payment/:id" element={<Payment  
          count={count}
          total={total}
          data={dataTrip}/>} />
        <Route exact path="/payment-approved/:id" element={<PaymentApprove total={total} count={count} data={dataTrip}/>} />
        {/* <Route exact path="/list-transaction" element={<ListTransaction />} /> */}
        {/* <Route exact path="/income-trip" element={<IncomeTrip />} /> */}
        {/* <Route exact path="/add-trip" element={<AddTrip />} /> */}
        <Route exact path="/profile" element={ <Profile  
        data={dataTrip}
        count={count}
        total={total}
        />} />
      </Route>

      <Route element={<PrivateRoute login={storage}/>} >
        <Route exact path="/list-transaction" element={<ListTransaction />} />
        <Route exact path="/add-trip" element={<AddTrip />} />
        <Route exact path="/income-trip" element={<IncomeTrip />} />
        {/* <Route exact path="/payment/:id" element={<Payment  
          count={count}
          total={total}
          data={Data}/>} /> */}
        <Route exact path="/profile" element={ <Profile  
        data={Data}
        count={count}
        total={total}
        />} />
        {/* <Route exact path="/payment-approved/:id" element={<PaymentApprove count={count} total={total} data={dataTrip}/>} /> */}
      </Route>

    </Routes>
    </Router>
    </>
  );
}

export default App;