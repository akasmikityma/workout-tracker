import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Comps/Home'
import { RecoilRoot } from 'recoil'
const App = () => {
  return (
   <RecoilRoot>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
   </RecoilRoot>
  )
}

export default App