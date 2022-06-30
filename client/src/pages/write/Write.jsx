import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img 
        className="writeimg"
        src="https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?cs=srgb&dl=pexels-pixabay-2150.jpg&fm=jpg" 
        alt="" />
      <form className="writeform">
          <div className="writeformgroup">
              <label htmlFor="fileinput">
              <i className="writeicon fa-solid fa-plus"></i>
              </label>
              <input type="file" id="fileinput" style={{display:"none"}} />
              <input type="text" placeholder="title" className="writeinput" autoFocus={true}/>
          </div>
          <div className="writeformgroup">
              <textarea placeholder="tell your story..... " type="text" className="writeinput writetext" ></textarea>
          </div>
          <button className="writesubmit">publish</button>
      </form>
    </div>
  )
}
