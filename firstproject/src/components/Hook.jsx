import { useState } from "react";

function Hook(){
  // let a=20;
  const [data,setdata] =useState("hello"); //data = variable name that can a also and something else
  function fun(){
  //  a=10;
  //  alert("Value of variable"+a);
  setdata("Changed value");
  }
return(
    <>
    <h1>State of Value</h1>
    <h1>{data}</h1>
    <button onClick={fun}>Click</button> 
    </>
    )
}
    export default Hook