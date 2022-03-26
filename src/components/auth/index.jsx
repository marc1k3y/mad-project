import cn from "./style.module.css"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { successAction } from "../../store/auth/actions"
import { login, reg } from "../../http/authApi"

export const Auth = () => {
  const dispatch = useDispatch()
  const [isReg, setIsReg] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repPass, setRepPass] = useState("")

  function auth(e) {
    e.preventDefault()
    isReg
      ? password === repPass &&
      reg(email, password)
        .then((data) => {
          dispatch(successAction())
          localStorage.setItem("token", data.token)
        })
      : login(email, password)
        .then((data) => {
          dispatch(successAction())
          localStorage.setItem("token", data.token)
        })
  }

  return (
    <div className={cn.authWrapper}>
      <div className={cn.title}>Please enter</div>
      <div>
        <button onClick={() => setIsReg(!isReg)}>
          {isReg ? "I have account" : "I don't have account"}
        </button>
      </div>
      <form onSubmit={(e) => auth(e)}>
        <div>
          <div>Enter email</div>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <div>Enter password</div>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {isReg &&
          <div>
            <div>Repeat password</div>
            <input type="password" value={repPass} onChange={(e) => setRepPass(e.target.value)} />
          </div>}
        <button type="submit">
          {isReg ? "Sign up" : "Sign in"}
        </button>
      </form>
    </div>
  )
}