import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route } from "react-router-dom";
import Home from "./pages/home/home/Home";
import Tour from "./pages/tour/tour/Tour"
import RootLayout from "./route/RootLayout";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path='/tour' element={<Tour/>}></Route>
  </Route>
))

function App() {
  return <RouterProvider router={router}/>
}

export default App;
