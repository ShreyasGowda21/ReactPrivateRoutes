import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
const Login = () => {

 const[email,setEmail]=useState("")
 const[password,setPassword]=useState("")

 const navigate=useNavigate();

 function handleLogin(e){
    e.preventDefault()

    if(email==="shreyu@gmail.com" && password==="123"){
        toast.success("login success")
        localStorage.setItem("loggedIn",true)
        navigate('/home')

    }else{
        toast.error("invalide credentials")
    }
 }


  return (
    <>
    <div>
     <center><h1>login page</h1></center> 

     <form onSubmit={handleLogin}>
        <input type="text" placeholder="enter email"
        onChange={(e)=>setEmail(e.target.value)}
        required
        /><br></br><br></br>
        <input type="text" placeholder="enter password"
        onChange={(e)=>setPassword(e.target.value)}
        required
        /><br></br><br></br>
        <button>Login</button>
     </form>
    </div>
    </>
  )
}

export default Login
