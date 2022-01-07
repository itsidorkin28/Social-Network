import {useEffect} from 'react';
import './App.module.scss';
import s from './App.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './redux-store';
import {Header} from '../features/Header/Header';
import {Main} from '../features/Main/Main';
import {ErrorSnackbar} from '../components/ErrorSnackbar/ErrorSnackbar';
import {getAuthUserDataTC} from '../features/Login/auth-reducer';
import {Login} from '../features/Login/Login';

export const App = () => {
	const dispatch = useDispatch();
	const appInitialization = useSelector<AppStateType, boolean>(state => state.app.initialization);

	useEffect(() => {
		dispatch(getAuthUserDataTC());
	}, [dispatch]);

	return (
		<div className={s.app}>
			<ErrorSnackbar/>
			{appInitialization
				? <>
					<Header/>
					<Main/>
				</>
				: <>
					<Login/>
				</>}

		</div>

	);
};


