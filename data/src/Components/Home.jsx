import React ,{useState} from 'react'

const Home = () => {
    const[data,setData]=useState({
        email:"",
        password:"",
    })
    const{email,password}={...data}
    const changeHandler=e =>{setData({...data,[e.target.name]:e.target.value})}
    const SubmitHandler=e=>{
        e.preventDefault();
       console.log(data)
    }
  return (
    <div>
          <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr></hr>
    <form onSubmit={SubmitHandler} >
            <label style={{color:'blueviolet'}}>email</label>  <br />
            <input type ="text"  name ="email" value={email}  onChange={changeHandler}/> <br />
            <label style={{color:"red"}}>Password</label>  <br />
            <input type ="password"  name="password" value={password}  onChange={changeHandler}/> <br />
            <input type="submit" value= "Login" />



        </form>
    
    </div>
  )
}

export default Home
