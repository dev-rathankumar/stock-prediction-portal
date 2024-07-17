import {useContext} from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const { isLoggedIn } = useContext(AuthContext)
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to='/login' />
  )
}

export default PrivateRoute