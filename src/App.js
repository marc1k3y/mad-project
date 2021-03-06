import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import { Header } from "./components/header"
import { Loader } from "./components/UI/loader"
import { check } from "./http/authApi"
import { privateRoutes, publicRoutes } from "./routes"
import { successAction } from "./store/auth/actions"
import jwtDecode from "jwt-decode"
import { setRoleAction, setUserIdAction } from "./store/user/actions"

function App() {
  const dispatch = useDispatch()
  const { isAuth } = useSelector(state => state.auth)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    check()
      .then((res) => {
        const token = jwtDecode(res.token)
        dispatch(successAction())
        dispatch(setUserIdAction(token.id))
        dispatch(setRoleAction(token.role))
      })
      .finally(() => setLoading(false))
  }, [dispatch, isAuth])

  if (loading) return <Loader />

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
    </div>
  )
}

export default App
