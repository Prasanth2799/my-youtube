import { createBrowserRouter, RouterProvider } from "react-router"
import Header from "./components/Header"
import Body from "./components/Body"
import MainContainer from "./components/MainContainer"
import { Provider } from "react-redux"
import appStore from "./store/appStore"

function App() {

  return (
    <>
    <Provider store={appStore}>
      <Header />
      <RouterProvider router={appRouter}/>
    </Provider>
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <Body />,
    children : [
      {
        path : "/",
        element : <MainContainer />
      }
    ]
  }
])

export default App
