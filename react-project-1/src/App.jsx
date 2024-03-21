import React from 'react'
import DrinkVolumeInputTracker from './components/DrinkVolumeInputTracker'
import NavigationBar from './components/NavigationBar'
import { Outlet } from 'react-router-dom'


function App() {
  return (
    <div>
       <NavigationBar />
       <Outlet />
      {/* <DrinkVolumeInputTracker /> */}
     
    </div>
  )
}


export default App