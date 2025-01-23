import React from 'react'
import "../NotFound/index.css"

const NotFound = () => {
  return (
    <>
  <h1>Not Found</h1>
  <p className="zoom-area">
  </p>
  <section className="error-container">
    <span className="four">
      <span className="screen-reader-text">4</span>
    </span>
    <span className="zero">
      <span className="screen-reader-text">0</span>
    </span>
    <span className="four">
      <span className="screen-reader-text">4</span>
    </span>
  </section>
  <div className="link-container">
    <a
      target="_blank"
      href="#"
      className="more-link"
    >
      Wrong access
    </a>
  </div>
</>

  )
}

export default NotFound