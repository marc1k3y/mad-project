import { $host, $authHost } from "./index"

export const reg = async (email, password) => {
    const { data } = await $host.post("api/user/reg", { email, password })
    return data
}

export const login = async (email, password) => {
    const { data } = await $host.post("api/user/login", { email, password })
    return data
}

export const check = async () => {
    const { data } = await $authHost.get("api/user/auth")
    localStorage.setItem("token", data.token)
    return data
}