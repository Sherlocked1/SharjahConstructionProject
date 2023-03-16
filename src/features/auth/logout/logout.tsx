import React from 'react'
import { auth } from '../../../firebase'

const Logout = () => {
    
    auth.signOut()

  return (
    <div></div>
  )
}

export default Logout