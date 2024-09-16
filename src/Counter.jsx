import React from 'react'
import {useSelector,useDispatch}  from 'react-redux'
import { Inc } from './slice/counterslice';

export default function Counter() {
    
  
    const count = useSelector(y=>y.counter);
    const dis = useDispatch();

    

    const inccremet = ()=>{
        dis({type:'Counter_ASYC'})
    }

    if(count ==3)
    {
  return  Error("This is the error")

}
else
{
  return ( <div>{count }

    <button onClick={inccremet}>+</button>
    <button>-</button>
</div>)
}
}
