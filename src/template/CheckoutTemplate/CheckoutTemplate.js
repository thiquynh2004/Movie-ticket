import React from 'react'
import { USER_LOGIN } from '../../utils/config'
import { Navigate } from 'react-router-dom'
export default function CheckoutTemplate() {
    if(!localStorage.getItem(USER_LOGIN)){
        return <Navigate to='/signin'/>
    }
  return (
    <div>CheckoutTemplate</div>
  )
}
