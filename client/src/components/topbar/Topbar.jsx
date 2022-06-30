import {Link} from "react-router-dom";
import "./topbar.css"

export default function topbar() {
  const user = true;//again a pseudo user here for logout section
  return (
    <div className='top'>
      <div className="topleft">
      <i className="topicon fa-brands fa-facebook-square"></i>
      <i className="topicon fa-brands fa-twitter-square"></i>
      <i className="topicon fa-brands fa-instagram-square"></i>
      <i className="topicon fa-brands fa-github-square"></i>
      </div>
      <div className="topcenter">
        <ul className="toplist">
          <li className="toplistitem">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="toplistitem"><Link className="link" to="/about">ABOUT</Link></li>
          <li className="toplistitem"><Link className="link" to="/contact">CONTACT</Link></li>
          <li className="toplistitem"><Link className="link" to="/write">WRITE</Link></li>
          <li className="toplistitem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topright">
        {
        user?(
        <img className="topimg" src="https://lh3.googleusercontent.com/a-/AOh14Gg0f3VhNmkgwuhfkbj-zX3G3FL_-GzVQyWKVE8jZQ=s360-p-rw-no" alt="" />
        ):(
          <ul className="toplist">
            <li className="toplistitem"><Link className="link" to="/login">LOGIN</Link></li>
            <li className="toplistitem"><Link className="link" to="/register">REGISTER</Link></li>
          </ul>
        )
      }
        <i className="topsearchicon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}