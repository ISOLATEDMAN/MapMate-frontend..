import './App.css'
import { useRoutes } from 'react-router-dom'
import Layout from './components/layouts'
import Login from './pages/Login/login'
import Home from './pages/home'
import SignUp from './pages/SignUp'
import DashBoard from './pages/homePage/dashBoard'

function CustomRoutes(){
  const element = useRoutes([
    {
      path:'/',
      element:<Layout />,
      children:[
        { index: true, element: <Home /> }, 
        {path:'login',element:<Login />},
        {path:'signup',element:<SignUp />},
        {path:'home',element:<Home />},
        {path:'dashBoard',element:<DashBoard />},
      ]
    },
    {
      path:'*',element:<Layout />
    }
  ]);
  return element;
}

function App() {

  return (
    <>
      <CustomRoutes />
    </>
  )
}

export default App
