import React from "react"

// import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/home.css"

export default (props) => {
  return (
    <div class="container-fluid">
      <div className="container text-center">
        <div className="features">
          <h1>Latest and Greatest</h1>
        </div>
      </div>
      <div>
        <div className="col-md-8 col-12">
          <img
            src="./assets/nikeZoom.png"
            className="img-fluid nikeZoom"
            alt="Banner 1"
          />
        </div>
      </div>
    </div>
  )
}
