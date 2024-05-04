

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './stores/pages/LandingPage'
import KitchenPage from './stores/pages/KitchenPage'
import MobilePage from './stores/pages/MobilePage'
import CompPage from './stores/pages/CompPage'
import WatchPage from './stores/pages/WatchPage'
import MenPage from './stores/pages/MenPage'
import WomanPage from './stores/pages/WomanPage'
import FurniturePage from './stores/pages/FurniturePage'
import AcPage from './stores/pages/AcPage'
import MobilesSingle from './singles/MobilesSingle'
import ComputerSingle from './singles/ComputerSingle'
import AcSingle from './singles/AcSingle'
import FurnitureSingle from './singles/FurnitureSingle'
import KitchenSingle from './singles/KitchenSingle'
import MenSingle from './singles/MenSingle'
import WatchSingle from './singles/WatchSingle'
import WomanSingle from './singles/WomanSingle'
import UserCart from './stores/UserCart'

const App=()=> {
  return(
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/kitchen' element={<KitchenPage/>}/>
        <Route path='/mobiles' element={<MobilePage/>}/>
        <Route path='/computers' element={<CompPage/>}/>
        <Route path='/watch' element={<WatchPage/>}/>
        <Route path='/men' element={<MenPage/>}/>
        <Route path='/woman' element={<WomanPage/>}/>
        <Route path='/furniture' element={<FurniturePage/>}/>
        <Route path='/ac' element={<AcPage/>}/>
           <Route path='/mobiles/:id' element={<MobilesSingle/>}/>
           <Route path='/computers/:id' element={<ComputerSingle/>}/>
           <Route path='/ac/:id' element={<AcSingle/>}/>
           <Route path='/furniture/:id' element={<FurnitureSingle/>}/>
           <Route path='/kitchen/:id' element={<KitchenSingle/>}/>
           <Route path='/men/:id' element={<MenSingle/>}/>
           <Route path='/watch/:id' element={<WatchSingle/>}/>
           <Route path='/woman/:id' element={<WomanSingle/>}/>
           <Route path='/cart' element={<UserCart/>}/>
      </Routes>
    </div>
  )
}
    
export default App
