import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import { Header } from "./components/header"
import { Tg } from "./components/tg"
import { privateRoutes, publicRoutes } from "./routes"

function App() {
  const { isAuth } = useSelector(state => state.auth)
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <Routes>
          {isAuth
            ? privateRoutes.map(route =>
              <Route
                key={route.path}
                path={route.path}
                element={route.element} />)
            : publicRoutes.map(route =>
              <Route
                key={route.path}
                path={route.path}
                element={route.element} />)}
        </Routes>
      </div>
      <Tg />
    </div>
  )
}

export default App
