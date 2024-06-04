import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './assets/component/Homepage'
import EmployeePage from './assets/component/EmployeePage'

function App() {

  return (
    <>
      <div id='container'>
        <Homepage />
        <EmployeePage />
      </div>
    </>
  )
}

export default App
