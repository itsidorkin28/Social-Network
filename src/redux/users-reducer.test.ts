import {UsersPageType, usersReducer} from "./users-reducer";

let initialState: UsersPageType = {
    usersList: [
        {
            id: 1,
            followed: true,
            name: 'Alexander',
            status: 'React Dev'
        },
        {
            id: 2,
            followed: false,
            name: 'Alena',
            status: 'Lashmaker'
        }
    ]
}

beforeEach(() => {
    initialState = {
        usersList: [
            {
                id: 1,
                followed: true,
                name: 'Alexander',
                status: 'React Dev'
            },
            {
                id: 2,
                followed: false,
                name: 'Alena',
                status: 'Lashmaker'
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
                id: 3,
                followed: false,
                name: 'Sasha',
                status: 'IT'
            }
        ]
    })

    expect(endState.usersList.length).toBe(3)
    expect(endState.usersList[2].followed).toBe(false)
})