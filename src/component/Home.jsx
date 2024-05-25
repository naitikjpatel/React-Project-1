import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';


export default function Home({fromData,setFromData}) {



    const [si,setSi]=useState(0);
    const changeHandler=(e)=>{
        const {name,value}=e.target;
        const newval=parseFloat(value)
        setFromData({
            ...fromData,
            [name]:newval
        }
        )
    }



    const submitHandler=(e)=>{
        e.preventDefault();
        const ans=calculation()
        setSi(ans);
    }

    const calculation=()=>(fromData.amount * fromData.rate *  fromData.year)/100;


  return (
    <div>
      
      <form onSubmit={submitHandler} >
      <label>Enter Principle Amount</label>
      <input  type="text" placeholder="Enter Amount" name='amount' value={fromData.amount}  onChange={changeHandler}/>
      <br />
      <label>Enter Rate of Interest</label>
      <input type="text" placeholder="Enter Rate" name='rate' value={fromData.rate} onChange={changeHandler} />
      <br />
      <label>Enter Number of Year</label>
      <input type="text" placeholder="Enter Year" name='year' value={fromData.year} onChange={changeHandler}/>

      <br/>
      <button>Submit</button>
      </form>

        {
            si!=0 && <h1>Simple Interest is : {si}</h1>
        }

    </div>
  )
}
