import { Navigate,Outlet } from "react-router-dom"



function PrivateUser({login}){
    // const storage = localStorage.getItem('name')    
    return(
        <>
        
            {login !== null ? <Outlet /> : <Navigate to="/" />}
        </>
    )
}


export default PrivateUser