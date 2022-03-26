import { Auth } from "./components/auth"
import { Posts } from "./components/posts"

export const privateRoutes = [
  { path: "*", element: <Posts /> }
]

export const publicRoutes = [
  { path: "*", element: <Posts /> },
  { path: "/auth", element: <Auth /> }
]