import {v1} from "uuid";
import {UsersPageType, usersReducer} from "./users-reducer";

let initialState: UsersPageType = {
    usersList: [
        {
            id: v1(),
            followed: true,
            fullName: 'Alexander',
            status: 'React Dev',
            location: {city: 'Tula', county: 'Russia'},
            avatar: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg'
        },
        {
            id: v1(),
            followed: false,
            fullName: 'Alena',
            status: 'Lashmaker',
            location: {city: 'Tula', county: 'Russia'},
            avatar: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg'
        }
    ]
}

beforeEach(() => {
    initialState = {
        usersList: [
            {
                id: v1(),
                followed: true,
                fullName: 'Alexander',
                status: 'React Dev',
                location: {city: 'Tula', county: 'Russia'},
                avatar: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg'
            },
            {
                id: v1(),
                followed: false,
                fullName: 'Alena',
                status: 'Lashmaker',
                location: {city: 'Tula', county: 'Russia'},
                avatar: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg'
            }
        ]
    }
})

test('user should follow', () => {

    const endState = usersReducer(initialState, {
        type: 'FOLLOW',
        id: initialState.usersList[1].id
    })

    expect(endState.usersList.length).toBe(2)
    expect(endState.usersList[0].followed).toBe(true)
    expect(endState.usersList[1].followed).toBe(true)
})

test('user should unfollow', () => {

    const endState = usersReducer(initialState, {
        type: 'UNFOLLOW',
        id: initialState.usersList[0].id
    })

    expect(endState.usersList.length).toBe(2)
    expect(endState.usersList[0].followed).toBe(false)
    expect(endState.usersList[1].followed).toBe(false)
})

test('correct set-users', () => {

    const endState = usersReducer(initialState, {
        type: 'SET-USERS',
        users: [
            {
                id: v1(),
                followed: false,
                fullName: 'Sasha',
                status: 'IT',
                location: {city: 'Moscow', county: 'Russia'},
                avatar: 'https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg'
            }
        ]
    })

    expect(endState.usersList.length).toBe(3)
    expect(endState.usersList[2].followed).toBe(false)
})