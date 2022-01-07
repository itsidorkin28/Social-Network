import {ErrorMessage, Field, Form, Formik} from 'formik';
import React from 'react';
import {PostAdd} from '@mui/icons-material';
import {IconButton} from '@mui/material';
import * as Yup from 'yup';
import s from './MyPostsForm.module.scss';

type MyPostsFormType = {
	addPostHandler: (value: string) => void
};

type FormType = {
	postText: string
};

const validationSchema = Yup.object({
	postText: Yup.string()
		.max(300, 'Must be 300 characters or less')
});

export const MyPostsForm = React.memo(({addPostHandler}: MyPostsFormType) => {
	const submit = (values: FormType, {setSubmitting}: { setSubmitting: (setSubmitting: boolean) => void }) => {
		addPostHandler(values.postText);
		setSubmitting(false);
	};
	return <div style={{width: '100%'}}>
		<Formik
			initialValues={{postText: ''}}
			onSubmit={submit}
			validationSchema={validationSchema}
		>
			{
				({isSubmitting}) => (
					<Form className={s.myPostsForm}>
						<IconButton type='submit' disabled={isSubmitting} style={{margin: '0 0 5px 0'}}>
							<PostAdd color='primary'/>
						</IconButton>
						<span>Create post</span>
						<Field component={'textarea'} name='postText' type='text' placeholder={'What\'s on your mind?'}/>
						<ErrorMessage name='postText' />

					</Form>)
			}
		</Formik>
	</div>;
});