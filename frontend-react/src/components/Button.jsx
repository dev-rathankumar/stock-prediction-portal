import React from 'react'

const Button = (props) => {
  return (
    <>
        <a className={`btn ${props.class}`} href="#">{props.text}</a>
    </>
  )
}

export default Button