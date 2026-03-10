import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Demo} from './components/Demo'
import Demo2 from './components/Demo2'

function App() {

  return (
    <div>
    <h1>Hi I am Ritika Singh </h1>
    <h1>Inside the app component </h1>
    <Employee></Employee>
    <Sum></Sum>
    <Demo></Demo>
    <Demo2></Demo2>
    </div>
  
  )
}
function Employee(){
  return(
    <h1>The employee name is Ritika Singh</h1>
  )
}
function Sum(){
  return(10+10);
}

export default App
