import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebaritem">
          <span className="sidebartitle">ABOUT ME</span>
          <img src="https://images.pexels.com/photos/265987/pexels-photo-265987.jpeg?cs=srgb&dl=pexels-pixabay-265987.jpg&fm=jpg" alt="" />
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laborum doloribus quibusdam dolor omnis?
          </p>
      </div>
      <div className="sidebaritem">
      <span className="sidebartitle">CATEGORIES</span>
      <ul className="sidebarlist">
          <li className="sidebarlistitem">Life</li>
          <li className="sidebarlistitem">Music</li>
          <li className="sidebarlistitem">Style</li>
          <li className="sidebarlistitem">Sport</li>
          <li className="sidebarlistitem">Tech</li>
          <li className="sidebarlistitem">Cinema</li>
          
      </ul>
      </div>
      <div className="sidebaritem">
      <span className="sidebartitle">FOLLOW US</span>
        <div className="sidebarsocial">
        <i className="sidebaricon fa-brands fa-facebook-square"></i>
      <i className="sidebaricon fa-brands fa-twitter-square"></i>
      <i className="sidebaricon fa-brands fa-instagram-square"></i>
      <i className="sidebaricon fa-brands fa-github-square"></i>
        </div>

      </div>
    </div>
  )
}
