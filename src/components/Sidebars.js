import React from 'react'
import "../screens/prafull.css"
const Sidebars = () => {
  return (
    <div className="container-side">
        <div className="logo side">
          {/* <img
            src="https://tse3.mm.bing.net/th?id=OIP.lCLulmLSKngZC3wJ3aLR2wHaF7&pid=Api&P=0"
            alt="set"
            className="logo"
          /> */}
         <h3><b>Hydrateq</b></h3> 
        </div>
        <br />
        <br />
        <br />
        <div className="projects side">Projects</div>
        <div className="projects side">DashBoard</div>
        <hr />
        <div className="side">
          <img
            src="https://www.pikpng.com/pngl/m/82-827408_help-icon-png-play-button-icon-png-clipart.png"
            alt="set"
            className="icon"
          />{" "}
          Aqua
        </div>
        <div className="side">
          <img
            src="https://www.pikpng.com/pngl/m/82-827408_help-icon-png-play-button-icon-png-clipart.png"
            alt="set"
            className="icon"
          />{" "}
          Help
        </div>
        <div className="side">
          <img
            src="https://www.pikpng.com/pngl/m/112-1121340_settings-logo-png-white-png-download-setting-icon.png"
            alt="set"
            className="icon"
          />{" "}
          Setting
        </div>
      </div>
  )
}

export default Sidebars