// UncontrolledLottie.jsx
import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../../public/icons/check_circle.json'

class UncontrolledLottie extends Component {

  render(){

    const defaultOptions = {
      loop: true,
      repeat: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div>
        <Lottie options={defaultOptions}
              height={19.5}
              width={20}
              style={{marginLeft: 10}}
        />
      </div>
    )
  }
}

export default UncontrolledLottie