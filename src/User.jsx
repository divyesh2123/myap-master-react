import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserRequest } from './slice/userslice';

export default function User() {
   const data = useSelector(y=>y.user.data);

   console.log(data);
   const dis = useDispatch();

   useEffect(()=>{

    dis(UserRequest())

   },[])
  return (
    <div>User</div>
  )
}
