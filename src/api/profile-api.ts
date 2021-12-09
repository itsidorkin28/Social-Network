import axios from "axios";
import {UserDescriptionType} from "../redux/profile-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '1e90b645-3ab8-4f0b-b1bb-01b70c47396d'
    },
})

export const profileAPI = {
    getProfile(paramsUserID: string | undefined) {
        return instance.get<UserDescriptionType>(`profile/${paramsUserID}`)
    }
}