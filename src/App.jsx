import HomePage from "./routes/homePage/HomePage"
import { createBrowserRouter,RouterProvider} from "react-router-dom"
import ListPage from "./routes/ListPage/ListPage"
import Layout from "./routes/layout/Layout"
import SinglePage from "./routes/singlePage/SinglePage"
import LoginPage from "./routes/login/LoginPage"
import Profile from "./routes/profile/Profile"
import RegisterPage from "./routes/register/Register"
import RequireAuth from "./routes/layout/RequireAuth"
import ProfileUpdatePage from "./routes/ProfileUpdate/ProfileUpdate"
function App() {
  const router= createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,

      children:[
        {
          path:"/",
          element: <HomePage/>
        },
        {
          path:"/list",
          element:<ListPage/>
        },
        {
          //here we have to show different page that is a whole page according to the id
          path:"/:id",
          element: <SinglePage/>
        },
        {
          path:"/login",
          element: <LoginPage/>
        },
        {
          path:"/register",
          element: <RegisterPage/>
        },
        {
          path:"/profile",
          element: <Profile/>
        }
      ]
    },
    {
      path:"/",
      element:<RequireAuth/>,

      children:[
        {
          path:"/profile",
          element: <Profile/>
        },
        {
          path:"/profile/update",
          element: <ProfileUpdatePage/>
        }
      ]
    }
  ])
  return (
    // <div className="layout">
    //   <div className="navbar">

    //     <Navbar/>
    //   </div>
    //   <div className="content">

    //     <HomePage/>
    //   </div>
    // </div>
    
    <RouterProvider router={router}/>
  )
}

export default App