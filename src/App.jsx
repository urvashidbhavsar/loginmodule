import './App.css';
import Signup from './signup/Signup';
import Signin from './signin/signin';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProtectedRoutes from './services/protectedRoutes';

function App() {
  // const route = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Signup />
  //   },
  //   {
  //     path: "/signin",
  //     element: <Signin />
  //   },
  //   {
  //     path: "/Home",
  //     element: <Home />
  //   }
  // ])

  return (
    <>
      {/* <RouterProvider router={route} /> */}
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Signup />}></Route>
          <Route path={"/signin"} element={<Signin />}></Route>
          <Route path={"/Home"} element={<ProtectedRoutes />}>
            <Route path={"/Home"} element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
