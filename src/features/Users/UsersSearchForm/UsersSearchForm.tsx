import {Field, Form, Formik} from 'formik';
import React from 'react';
import {FilterType} from '../users-reducer';
import * as Yup from 'yup';
import s from './UsersSearchForm.module.scss';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

type UsersSearchFormType = {
	onFilterChanged: (filter: FilterType) => void

};
type FormType = {
	term: string
	friend: 'null' | 'true' | 'false'
};
const validationSchema = Yup.object({
	term: Yup.string()
		.max(300, 'Must be 300 characters or less')
});

export const UsersSearchForm = React.memo(({onFilterChanged}: UsersSearchFormType) => {
	const submit = (values: FormType, {setSubmitting}: { setSubmitting: (setSubmitting: boolean) => void }) => {
		const filter: FilterType = {
			term: values.term,
			friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
		};
		onFilterChanged(filter);
		setSubmitting(false);
	};
	return <div>
		<Formik
			initialValues={{term: '', friend: 'null'}}
			onSubmit={submit}
			validationSchema={validationSchema}
		>
			{
				({isSubmitting}) => (
					<Form className={s.searchForm}>
						<div className={s.inputBlock}>
							<Field name='term' type='text' placeholder={'Search here'}/>
							<button className={s.searchBtn} type='submit' disabled={isSubmitting}>
								<div className={s.icon}><FilterAltOutlinedIcon
									sx={{fontSize: '25px', color: '#adb5bd'}}/></div>
							</button>
						</div>
						<div className={s.selectBlock}>
							<Field className={s.select} name='friend' as='select'>
								<option value='null'>All</option>
								<option value='true'>Only followed</option>
								<option value='false'>Only unfollowed</option>
							</Field>
						</div>

					</Form>)
			}
		</Formik>
	</div>;
});