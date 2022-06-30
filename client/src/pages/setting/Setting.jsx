import "./setting.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Setting() {
  return (
    <div className="settings">
        <div className="settingwrapper">
            <div className="settingtitle">
                <span className="settingupdatetitle">Update your account </span>
                <span className="settingdeletetitle">delete account </span>
            </div>
            <form className="settingform">
                <label>Profile picture</label>
                <div className="settingpp">
                    <img src="https://images.unsplash.com/photo-1542466500-dccb2789cbbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
                     alt="" />
                    <label htmlFor="fileinput">
                    <i className="settingppicon fa-solid fa-user"></i>
                    </label>
                    <input type="file" id="fileinput" style={{display:"none"}}/>
                </div>
                <label >UserName</label>
                <input type="text" placeholder="Naitik "/>
                <label >Email</label>
                <input type="email" placeholder="Naitik@gamil.com "/>
                <label >Password</label>
                <input type="password"/>
                <button className="settingsubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
