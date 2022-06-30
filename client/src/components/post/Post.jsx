import "./post.css"

export default function post() {
  return (
    <div className="post">
      <img className="postimg"
      src="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80" alt="image" />
      <div className="postinfo">
          <div className="postcats">
              <span className="postcat">Music</span>
              <span className="postcat">Life</span>
          </div>
          <span className="posttitle">
              Lorem ipsum dolor sit amet Quia
          </span>
          <hr/>
          <span className="postdate">
              1 hour ago
          </span>
      </div>
      <p className="postdesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Aliquam quod sint at, quam, aperiam ex id, ad rerum modi 
          assumenda eius? Error, culpa atque! Repellat ipsam labore qui velit dicta?
      </p>
    </div>
  )
}
