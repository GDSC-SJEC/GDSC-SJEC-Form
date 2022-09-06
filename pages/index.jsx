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
import FormThree from '../components/form-three/FormThree';
import ErrorForm from '../components/error-form/ErrorForm';
import { Toaster } from 'react-hot-toast';

const Home = () => {
	const initialState = {
		name: '',
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

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const [currentView, setCurrentView] = useState(1);

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
			<Toaster position='top-right' reverseOrder={false} />
			<BackgroundContainer>
				<FormContainer>
					<h1>Fill your self</h1>
					<CheckboxContainer>
						<Checkbox type='checkbox' checked={currentView == 1} />
						<Checkbox type='checkbox' checked={currentView == 2} />
						<Checkbox type='checkbox' checked={currentView == 3} />
					</CheckboxContainer>
					{currentView === 1 ? (
						!loading ? (
							<FormOne
								slideForm={slideForm}
								data={formData}
								handleChange={handleChange}
							/>
						) : (
							<Loading text='Missed something? No problem!' />
							// <Section>help</Section>
						)
					) : currentView === 2 ? (
						!loading ? (
							<FormTwo
								slideForm={slideForm}
								data={formData}
								handleChange={handleChange}
								setFormData={setFormData}
								slideResult={slideResult}
								setLoading={setLoading}
							/>
						) : (
							<Loading text="Great! We'll need some more information" />
						)
					) : currentView === 3 ? (
						!loading ? (
							<FormThree />
						) : (
							<Loading text='Submitting your information, please wait' />
						)
					) : (
						<ErrorForm />
					)}
				</FormContainer>
			</BackgroundContainer>
		</>
	);
};

export default Home;
