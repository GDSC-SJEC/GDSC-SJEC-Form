import { useState } from 'react';

import {
	BackgroundContainer,
	Checkbox,
	CheckboxContainer,
	FormContainer,
} from '../styles/index.styles';
import FormOne from '../components/form-one/FormOne';
import Loading from '../components/loading/Loading';
import FormTwo from '../components/form-two/FormTwo';
import SuccessForm from '../components/success-form/SuccessForm';
import ErrorForm from '../components/error-form/ErrorForm';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';
import FormZero from '../components/form-zero/FormZero';

const Home = () => {
	const initialState = {
		name: '',
		usn: '',
		semester: '',
		section: '',
		email: '',
		github: '',
		linkedin: '',
		discord: '',
		resume: '',
		projects: '',
		skills: '',
		domains: '',
		interests: '',
	};

	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState(initialState);
	const [direction, setDirection] = useState('right');

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const [currentView, setCurrentView] = useState(0);

	const slideForm = (formID) => {
		setCurrentView(formID);
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};

	const slideResult = (formID) => {
		setCurrentView(formID);
		setLoading(true);
	};

	return (
		<>
			<Head>
				<title>GDSC SJEC Details Form</title>
			</Head>
			<Toaster position='top-right' reverseOrder={false} />
			<BackgroundContainer>
				<FormContainer>
					<h1>Fill your self</h1>
					<CheckboxContainer>
						<Checkbox type='checkbox' checked={currentView == 0} />
						<Checkbox type='checkbox' checked={currentView == 1} />
						<Checkbox type='checkbox' checked={currentView == 2} />
						<Checkbox type='checkbox' checked={currentView == 3} />
					</CheckboxContainer>
					{loading ? (
						(direction === 'right' && (
							<Loading text="Great! We'll need some more information" />
						)) ||
						(direction === 'left' && (
							<Loading text='Missed something? No problem!' />
						))
					) : (
						<>
							{currentView == 0 && (
								<FormZero
									setDirection={setDirection}
									slideForm={slideForm}
									data={formData}
									handleChange={handleChange}
								/>
							)}
							{currentView == 1 && (
								<FormOne
									setDirection={setDirection}
									slideForm={slideForm}
									data={formData}
									handleChange={handleChange}
								/>
							)}
							{currentView == 2 && (
								<FormTwo
									setDirection={setDirection}
									slideForm={slideForm}
									data={formData}
									handleChange={handleChange}
									setFormData={setFormData}
									slideResult={slideResult}
									setLoading={setLoading}
								/>
							)}
							{currentView == 3 && <SuccessForm />}
							{currentView == 4 && <ErrorForm />}
						</>
					)}
				</FormContainer>
			</BackgroundContainer>
		</>
	);
};

export default Home;
