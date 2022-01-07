import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Users} from '../Users/Users';
import { Navbar } from '../Navbar/Navbar';
import {Profile} from '../Profile/Profile';
import s from './Main.module.scss';

export const Main = React.memo(() => {
	return (
		<main className={s.main}>
					<div className={s.nav}>
						<Navbar/>
					</div>
					<div className={s.content}>
						<Routes>
							<Route path='profile' element={<Profile/>}>
								<Route path=':userId' element={<Profile/>}/>
							</Route>
							<Route path={'users'} element={<Users/>}/>
							<Route path='*' element={<div>404</div>}/>
							<Route path={'social-network'} element={<Users/>}/>
							<Route path={'/'} element={<Users/>}/>
						</Routes>
					</div>

		</main>
	);
});


