import React from 'react'
import { BsLinkedin, BsGithub,BsStackOverflow } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
          <a href="https://www.linkedin.com/in/deepti-ranjan-baliarsingh-489758147/">
          <BsLinkedin />
          </a>           
        </div>
        <div>
          <a href="https://github.com/deeptiranjandrb">
            <BsGithub />
          </a>           
        </div>
        <div>
        <a href="https://stackoverflow.com/users/8653078/deeptiranjan">
            <BsStackOverflow />
          </a>           
        </div>
    </div>
  )
}

export default SocialMedia;