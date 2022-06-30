import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <span className="logintitle">Login</span>
      <form className="loginform">
        <label>Email</label>
        <input type="text" className="logininput" placeholder="enter your email..." />
        <label>Password</label>
        <input type="password" className="logininput" placeholder="enter your password..." />
        <button className="loginbutton">login</button>
      </form>
      <button className="loginregisterbutton"><Link className="link" to="/register">Register</Link></button>
      
    </div>
  )
}
