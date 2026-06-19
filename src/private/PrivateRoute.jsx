
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const PrivateRoute = (props) => {
  let isLogin=localStorage.getItem("loggedIn")

  if(isLogin==="true"){
  return props.children
  }
  else{
    toast.warn('login first')
    return <Navigate to="/"/>
  }
}

export default PrivateRoute
