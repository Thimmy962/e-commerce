import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import AuthContenxt from './Context'

const PrivateRoutes = () => {
    const {user} = useContext(AuthContenxt)
    return(
        user ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes