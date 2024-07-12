import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import World,{worldInfoLoader} from './Components/World/World.jsx'
import Sports,{sportsInfoLoader} from './Components/Sports/Sports.jsx'
import Science,{scienceInfoLoader} from './Components/Science/Science.jsx'
import Health,{healthInfoLoader} from './Components/Health/Health.jsx'
import Technology,{technologyInfoLoader} from './Components/Technology/Technology.jsx'
import Entertainment,{entertainmentInfoLoader}from './Components/Entertainment/Entertainment.jsx'
import Business,{businessInfoLoader} from './Components/Business/Business.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'




const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      { 
        loader:worldInfoLoader,
        path:'',
        element:<World/>
      },
      {  
        loader:worldInfoLoader,
        path:'world',
        element:<World/>
      },
      {  
        loader:businessInfoLoader,
        path:'business',
        element:<Business/>
      },
      { 
        loader:entertainmentInfoLoader,
        path:'entertainment',
        element:<Entertainment/>
      },
      { 
        loader:sportsInfoLoader,
        path:'sports',
        element:<Sports/>
      },
      { 
        loader:technologyInfoLoader,
        path:'technology',
        element:<Technology/>
      },
      { 
        loader:scienceInfoLoader,
        path:'science',
        element:<Science/>
      },
      { 
        loader:healthInfoLoader,
        path:'health',
        element:<Health/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
