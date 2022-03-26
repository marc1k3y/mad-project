import { Account } from "./components/account"
import { Auth } from "./components/auth"
import { Posts } from "./components/posts"

export const privateRoutes = [
  { path: "*", element: <Posts /> },
  { path: "/account", element: <Account /> }
]

export const publicRoutes = [
  { path: "*", element: <Auth /> },
  { path: "/posts", element: <Posts /> }
]