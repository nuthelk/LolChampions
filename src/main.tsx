import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './router/Routers'
import {RouterProvider} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

    <RouterProvider router={router} />


)
