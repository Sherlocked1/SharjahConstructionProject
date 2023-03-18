import Lottie from 'lottie-react'
const notFoundAnimation = require('../../lottie animations/not_found.json');

const NotFound = () => {
  return (
    <Lottie animationData={notFoundAnimation} />
  )
}

export default NotFound