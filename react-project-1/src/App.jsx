import NavigationBar from './components/NavigationBar'
import { Outlet } from 'react-router-dom'


function App() {
  return (
    <div>
       <NavigationBar />
       <Outlet />
     
    </div>
  )
}


export default App
