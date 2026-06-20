import { useEffect, useState } from "react"
const Profilepage = () => {

const[users,setUsers]=useState([])


useEffect(()=>{
fetch("https://api.github.com/users")
.then((x)=>x.json())
.then((data)=>setUsers(data))
},[])
console.log(users)

  return (
    <>
    <div>
      <center><h1>Welcome to Profile page</h1></center>
      {
        users.map((user)=>(
          <div key={user.id}>
             <img src={user.avatar_url} width='100px' height='100px'/>
            <p>{user.login}</p>
            </div>
        ))
      }

    </div>
    </>
  )
}

export default Profilepage
