import { Navigate,Outlet } from "react-router-dom"



function PrivateRoute({login}){
    // const storage = localStorage.getItem('name')  
    console.log(login.admin);  
    return(
        <>
        
            {login !== null && login.admin === true ? <Outlet /> : <Navigate to="/" />}
        </>
    )
}


export default PrivateRoute