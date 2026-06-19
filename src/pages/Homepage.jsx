import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
const Homepage = () => {

const navigate=useNavigate()
function logout(){
    toast.success("logged out")
    localStorage.clear()
    navigate('/')
}
  return (
    <>
    <div>
     <center> <h1>Welcome to Home page</h1></center><br></br>
     <center><button onClick={logout}>Logout</button></center>
    </div>
    </>
  )
}

export default Homepage
