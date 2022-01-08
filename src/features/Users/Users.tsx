import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../app/redux-store';
import {FilterType, followUserTC, getUsersTC, setCurrentPage, unfollowUserTC, UsersDomainType} from './users-reducer';
import React, {useCallback, useEffect} from 'react';
import {User} from './User/User';
import {CircularProgress, Pagination} from '@mui/material';
import {UsersSearchForm} from './UsersSearchForm/UsersSearchForm';
import s from './Users.module.scss';

export const Users = React.memo(() => {
		const dispatch = useDispatch();
		const usersPage = useSelector<AppStateType, UsersDomainType>(state => state.usersPage);

		const onFilterChanged = (filter: FilterType) => {
			dispatch(getUsersTC(1, usersPage.pageSize, filter));
		};

		useEffect(() => {
			dispatch(getUsersTC(usersPage.currentPage, usersPage.pageSize, usersPage.filter));
			return function () {
				setCurrentPage(1);
			};
		}, [dispatch, usersPage.currentPage, usersPage.pageSize, usersPage.filter]);

		const changeCurrentPage = useCallback((currentPage: number) => {
			dispatch(getUsersTC(currentPage, usersPage.pageSize, usersPage.filter));
		}, [dispatch, usersPage.pageSize, usersPage.filter]);

		const followUserHandler = useCallback((userID: number | string) => {
			dispatch(followUserTC(userID));
		}, [dispatch]);

		const unfollowUserHandler = useCallback((userID: number | string) => {
			dispatch(unfollowUserTC(userID));
		}, [dispatch]);

		const pagesCount = Math.ceil(usersPage.totalUsersCount / usersPage.pageSize);

		return (
			<div className={s.users}>
				<div className={s.searchBlock}>
					<div>
						<h2>Users</h2>
					</div>
					<div>
						<UsersSearchForm onFilterChanged={onFilterChanged}/>
					</div>
				</div>

				{usersPage.isFetching === 'loading' ?
					<CircularProgress style={{marginTop: '30px', marginBottom: '20px'}}/> :
					<User usersList={usersPage.usersList}
						  followUserHandler={followUserHandler}
						  unfollowUserHandler={unfollowUserHandler}/>}
				<div className={s.pagination}>
					<Pagination count={pagesCount}
								onChange={(e: React.ChangeEvent<unknown>, value: number) => changeCurrentPage(value)}/>
				</div>
			</div>);

	})


;