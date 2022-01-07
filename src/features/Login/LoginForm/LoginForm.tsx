import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {loginTC} from '../auth-reducer';
import {Field, Form, Formik} from 'formik';
import s from './LoginForm.module.scss';
import {AppStateType} from '../../../app/redux-store';
import {RequestStatusType} from '../../../app/app-reducer';

type LoginFormType = {
	email: string,
	password: string,
	rememberMe: boolean
};
const validationSchema = Yup.object({
	email: Yup.string().email('Invalid email address').required('Required'),
	password: Yup.string()
		.required('No password provided')
		.min(8, 'Password is too short - should be 8 chars minimum.')
		.matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});
export const LoginForm = () => {
	const dispatch = useDispatch();
	const appStatus = useSelector<AppStateType, RequestStatusType>(state => state.app.appStatus);

	const loginHandler = (email: string, password: string, rememberMe: boolean) => {
		dispatch(loginTC(email, password, rememberMe));
	};
	const submit = (values: LoginFormType, {setSubmitting}: { setSubmitting: (setSubmitting: boolean) => void }) => {
		loginHandler(values.email, values.password, values.rememberMe);
		setSubmitting(false);
	};

	return <div>
		<Formik
			initialValues={{email: '', password: '', rememberMe: false}}
			validationSchema={validationSchema}
			onSubmit={submit}
		>
			{
				({isSubmitting}) => (
					<Form className={s.loginForm}>
						<Field name='email' type='email' placeholder={'Email'}/>


						<Field name='password' type='password' placeholder={'Password'}/>


						<div className={s.remember}>
							<div><Field name='rememberMe' type='checkbox'/></div>
							<div><label htmlFor='rememberMe'>Remember me</label></div>
						</div>

						<button className={s.loginBtn} type='submit' disabled={appStatus === 'loading'}>Login</button>
					</Form>)
			}
		</Formik>
	</div>;
};