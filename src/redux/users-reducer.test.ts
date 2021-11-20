import {UsersPageType, usersReducer} from "./users-reducer";

let usersPage: UsersPageType

beforeEach(() => {
    usersPage = {
        usersList: [{
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
            }],
        pageSize: 5,
        totalUsersCount: 20,
        currentPage: 1,
        isFetching: false
    }
})

test('user should follow', () => {

    const endState = usersReducer(usersPage, {
        type: 'FOLLOW',
        id: usersPage.usersList[1].id
    })

    expect(endState.usersList.length).toBe(2)
    expect(endState.usersList[0].followed).toBe(true)
    expect(endState.usersList[1].followed).toBe(true)
})

test('user should unfollow', () => {

    const endState = usersReducer(usersPage, {
        type: 'UNFOLLOW',
        id: usersPage.usersList[0].id
    })

    expect(endState.usersList.length).toBe(2)
    expect(endState.usersList[0].followed).toBe(false)
    expect(endState.usersList[1].followed).toBe(false)
})

test('correct set-users', () => {

    const endState = usersReducer(usersPage, {
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

    expect(endState.usersList.length).toBe(1)
    expect(endState.usersList[0].followed).toBe(false)
})

test('correct change page', () => {

    const endState = usersReducer(usersPage, {
        type: 'SET-CURRENT-PAGE',
        currentPage: 2
    })

    expect(endState.usersList.length).toBe(2)
    expect(endState.currentPage).toBe(2)
})

test('toggle is fetching', () => {

    const endState = usersReducer(usersPage, {
        type: 'TOGGLE_IS_FETCHING',
        isFetching: true
    })

    expect(endState.usersList.length).toBe(2)
    expect(endState.currentPage).toBe(1)
    expect(endState.isFetching).toBe(true)
})