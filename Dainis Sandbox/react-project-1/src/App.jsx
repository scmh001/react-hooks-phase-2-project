import NavigationBar from './components/NavigationBar'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header />
       <NavigationBar />
       <Outlet />
     
    </div>
  )
}


export default App
