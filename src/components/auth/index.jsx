import cn from "./style.module.css"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { successAction } from "../../store/auth/actions"
import { login, reg } from "../../http/authApi"
import { MyButton } from "../UI/button"
import { MyInput } from "../UI/input"

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
          if (data.token) {
            dispatch(successAction())
            localStorage.setItem("token", data.token)
          }
        })
      : login(email, password)
        .then((data) => {
          if (data.token) {
            dispatch(successAction())
            localStorage.setItem("token", data.token)
          }
        })
  }

  return (
    <div className={cn.authWrapper}>
      <div className={cn.title}>Please enter</div>
      <div className={cn.regOrLog}>
        <button onClick={() => setIsReg(!isReg)}>
          {isReg ? "I have account" : "I don't have account"}
        </button>
      </div>
      <form onSubmit={(e) => auth(e)}>
        <div>
          <div>Enter email</div>
          <MyInput type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <div>Enter password</div>
          <MyInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {isReg &&
          <div>
            <div>Repeat password</div>
            <MyInput type="password" value={repPass} onChange={(e) => setRepPass(e.target.value)} />
          </div>}
        <MyButton type="submit">
          {isReg ? "Sign up" : "Sign in"}
        </MyButton>
      </form>
    </div>
  )
}