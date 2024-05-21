import { createHashRouter } from "react-router-dom"
import Home from './Home'
import ErrorPage from "./ErrorPage"
import FreeGames from "./FreeGames"

const router = createHashRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "freegames",
        element: <FreeGames />,
      },
    ],
  },
])

export default router