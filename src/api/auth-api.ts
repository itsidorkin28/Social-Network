import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '1e90b645-3ab8-4f0b-b1bb-01b70c47396d'
    },
})

export const authAPI = {
    authMe() {
        return instance.get<GetAuth>('auth/me')
    }
}

type GetAuth = {
    data: {
        login: string
        id: number
        email: string
    }
    messages: Array<string>
    fieldsErrors: Array<string>
    resultCode: number
}