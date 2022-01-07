import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {logoutTC} from '../Login/auth-reducer';
import {AppStateType} from '../../app/redux-store';
import s from './Header.module.scss';
import BoltIcon from '@mui/icons-material/Bolt';
import LogoutIcon from '@mui/icons-material/Logout';
import {RequestStatusType} from '../../app/app-reducer';

export const Header = React.memo(() => {
	const dispatch = useDispatch();
	const appStatus = useSelector<AppStateType, RequestStatusType>(state => state.app.appStatus);
	const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth);
	const login = useSelector<AppStateType, string | null>(state => state.auth.data.login);
	const logoutHandler = () => {
		dispatch(logoutTC());
	};
	return (
		<header className={s.header}>
			<div className={s.container}>
				<div className={s.title}>
					<BoltIcon sx={{fontSize: '45px', color: '#64d580'}}/>
					<h1>Lumos.</h1>
				</div>
				<div>
					{isAuth
						?
						<div className={s.loginInfo}>
							<span>{login}</span>
							<button className={s.logoutBtn} onClick={() => logoutHandler()} disabled={appStatus === 'loading'}>
								<LogoutIcon sx={{fontSize: '35px', color: '#2254f5'}}/>
							</button>
						</div>
						: <></>}
				</div>
			</div>

		</header>
	);
});