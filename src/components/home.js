import Header from './header'
import Content from './content'
import Footer from './footer'
// import NavHeader from './navbar'
// import ModalLogin from './modal-login'
// import NavHeader from './navbar'
// import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
// import Details from './details'




function Home (){
    return(
        <>
            {/* <NavHeader/> */}
            <Header />
            <Content />
            <Footer />
            {/* <h1>Hello Home</h1> */}

        </>
    )
}


export default Home