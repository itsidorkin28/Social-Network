import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '1e90b645-3ab8-4f0b-b1bb-01b70c47396d'
    },
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<GetUserType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                console.log(response.data)
                return response.data

            })
    },
    followUser(userID: number) {
        return instance.post<PostAndDeleteFollowType>(`follow/${userID}`)
    },
    unfollowUser(userID: number) {
        return instance.delete<PostAndDeleteFollowType>(`follow/${userID}`)
    },
}

type PostAndDeleteFollowType = {
    data: {},
    messages: Array<string>
    fieldsErrors: Array<string>
    resultCode: number
}

type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
}

type GetUserType = {
    items: Array<UserType>
    totalCount: number
    error: string
}


