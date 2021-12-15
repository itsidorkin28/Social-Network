import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '1e90b645-3ab8-4f0b-b1bb-01b70c47396d'
    },
})

export const profileAPI = {
    getProfile(paramsUserID: string | undefined) {
        return instance.get<ProfileType>(`profile/${paramsUserID}`)
    },
    getStatus(userId: string | undefined) {
        return instance.get<string>(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put<UpdateStatusType>(`profile/status`, {status})
    }

}

type UpdateStatusType = {
    data: {}
    messages: Array<string>
    fieldsErrors: Array<string>
    resultCode: number
}

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}