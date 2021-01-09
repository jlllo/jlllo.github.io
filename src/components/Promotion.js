import React from "react"
import Fade from "react-reveal/Fade"
import data from "../mydata"

const Promotion = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>{data.promotionHeading}</h1>
          </Fade>
          <div className="skill-grid">
          <div className="skill">
            <p>{data.promotionParaOne}</p>
          </div>
          <div className="skill">
            <p>{data.promotionParaTwo}</p>
          </div>
          <div className="skill">
            <p>{data.promotionParaThree}</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promotion
