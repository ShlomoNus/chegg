import { RouteObject } from 'react-router-dom'

  function Login() {


  return (
    <div>Login</div>
  )
}


export const LoginRoute:RouteObject ={
    path:'/login',element:<Login/>
}