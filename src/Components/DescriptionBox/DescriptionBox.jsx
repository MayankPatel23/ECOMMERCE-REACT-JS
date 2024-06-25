import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>E-commerce, the buying and selling of goods and services online,
                 has revolutionized the retail landscape, offering unparalleled
                  convenience and accessibility to consumers worldwide. 
                  It allows businesses to reach a global audience, operate 24/7, 
                  and streamline operations through digital transactions and inventory 
                  management. With the rise of mobile shopping, personalized marketing, 
                  and secure payment systems, e-commerce continues to drive innovation 
                  and transform how we shop, making it an integral part of modern life.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox