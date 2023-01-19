import React from 'react'

export default function LoginPage() {

  let headingStyle = {
    marginTop: "20px",
    marginLeft: "45%",
    fontFamily: 'Hanken Grotesk',
    color: "white"
  }

  let inputContStyle = {
    marginTop: "20px",
    marginLeft: "20%",
    marginBottom: "20px"
  }

  let contStyle = {
    width: "60%",
    marginTop: "40px",
    padding: "100px",
    backgroundColor: "grey"
  }

  let inputStyleOne = {
    marginLeft: "10px"
  }

  let inputStyleTwo = {
    marginLeft: "10px",
  }

  let buttonContStyle = {
    marginLeft: "45%"
  }

  return (
    <div className="container">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@200&display=swap');
        </style> 
        <h1 style={headingStyle}>Login</h1>
        <div style={contStyle} className="container">
            <div style={inputContStyle}>
                Email:
                <input style={inputStyleOne} type="text" />
            </div>
            <div style={inputContStyle}>
                Password: 
                <input style={inputStyleTwo} type="text" />            
            </div>
            <div style={buttonContStyle}>
                <button className='btn-sm btn-success'>Submit</button>
            </div>
        </div>
    </div>
  )
}
