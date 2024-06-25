import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subcripe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder="Your email id"/>
            <button>Subcribe</button>
        </div>
    </div>
  )
}

export default NewsLetter