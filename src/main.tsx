import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.sass'
import { RouterProvider } from 'react-router-dom'
import router from './pages/router'

/*const onRenderCallback = (
  id: number,
  phase: string,
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number,
  interactions: undefined | null
) => {
  console.log(`Phase: ${phase}; Duration: ${actualDuration.toFixed(2)}; Interact: ${interactions}`);
};*/
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Profiler id="App" onRender={onRenderCallback}> */}
      <RouterProvider router={router} />
    {/* </Profiler> */}
  </React.StrictMode>,
)
