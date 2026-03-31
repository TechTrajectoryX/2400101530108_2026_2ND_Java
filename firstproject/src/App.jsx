import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Demo} from './components/Demo'
import Demo2 from './components/Demo2'

function App() {
//   const name="denial";
//   let x=10;
//   let y=20;
//   var a=10;
//   var a=20;
//   const c=10;
//   const d=20;
//  function fun(){
//   return(
//     "inside the function"
//   )
//  }
//  function sum(a,b){
//  return a+b;
 
//  }
//  function func(a,b,op){
//  if(op=="+")
//   return a+b;

//  else if(op=="-")
//   return a-b;

//  else if(op=="*")
//   return a*b;
//  }
 function callfun()
    {
      alert("Function call");
    }
    function callfc()
    {
      alert("You click on the apple button");
    }
    function callf()
    {
      alert("You click on the banana button");
    }
  return (
    <div>
    {/* <h1>Hi I am Ritika Singh </h1>
    <h1>Inside the app component </h1> */}
    {/* <h1>User variable with jsx</h1>
     <h1>value of variable is {name}</h1>
    <h1>{x+y}</h1>
    <h1>{a+a}</h1>
      <h1>{c+d}</h1>
       <h1>User function with jsx</h1>
       <h1>{fun()}</h1>
       <h1>example of parameterized function {sum(934,40)}</h1>
       <h1>example of parameterized function {func(9,4,"-")}</h1> */}
        <h1>Welcome in new Project</h1>
        <button onClick={callfun}>Click on the button </button>
        <button onClick={callfc}>Apple </button>
        <button onClick={callf}>Banana </button>

    {/* <Employee></Employee>
    <Sum></Sum>
    <Demo></Demo>
    <Demo2></Demo2> */}
    </div>
  
  )
}
// function Employee(){
//   return(
//     <h1>The employee name is Ritika Singh</h1>
//   )
// }
// function Sum(){
//   return(10+10);
// }

export default App
