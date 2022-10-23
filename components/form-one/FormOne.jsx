import { useState } from 'react';
import {
	ErrorText,
	FlexContainer,
	FormItem,
	InputStyles,
	LabelStyles,
	Section,
} from '../../styles/index.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	faArrowCircleLeft,
	faArrowCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import {
	checkDiscord,
	checkEmail,
	checkGitHub,
	checkLinkedin,
} from '../../utils/validation';
import { toast } from 'react-hot-toast';

const FormOne = ({ slideForm, data, handleChange, setDirection }) => {
	const [errors, setErrors] = useState({
		email: false,
		github: false,
		linkedin: false,
		discord: false,
	});

	const routeFormZero = () => {
		slideForm(0);
		setDirection('left');
	};

	const routeFormTwo = () => {
		if (
			checkEmail(data.email).valid &&
			checkGitHub(data.github).valid &&
			checkLinkedin(data.linkedin).valid &&
			checkDiscord(data.discord).valid
		) {
			slideForm(2);
			setDirection('right');
		} else {
			toast.error('Please fill all the fields correctly', {
				style: {
					borderRadius: '10px',
					background: '#2c2728',
					color: '#fff',
				},
			});
		}
	};

	const checkChange = (e) => {
		handleChange(e);
		switch (e.target.name) {
			case 'email':
				setErrors({ ...errors, email: !checkEmail(e.target.value).valid });
				break;
			case 'github':
				setErrors({ ...errors, github: !checkGitHub(e.target.value).valid });
				break;
			case 'linkedin':
				setErrors({
					...errors,
					linkedin: !checkLinkedin(e.target.value).valid,
				});
				break;
			case 'discord':
				setErrors({
					...errors,
					discord: !checkDiscord(e.target.value).valid,
				});
				break;
			default:
				break;
		}
	};

	return (
		<Section>
			<FormItem>
				<LabelStyles>
					Email *{' '}
					<ErrorText>
						{errors.email ? checkEmail(data.email).message : ''}
					</ErrorText>
				</LabelStyles>
				<InputStyles
					type='text'
					name='email'
					placeholder='Enter your email'
					id={errors.email ? 'error' : ''}
					value={data.email}
					onChange={checkChange}
				/>
			</FormItem>
			<FormItem>
				<LabelStyles>
					GitHub *{' '}
					<ErrorText>
						{errors.github ? checkGitHub(data.github).message : ''}
					</ErrorText>
				</LabelStyles>
				<InputStyles
					type='text'
					name='github'
					placeholder='Enter your github link. Eg: github.com/username'
					id={errors.github ? 'error' : ''}
					value={data.github}
					onChange={checkChange}
				/>
			</FormItem>
			<FormItem>
				<LabelStyles>
					LinkedIn *{' '}
					<ErrorText>
						{errors.linkedin ? checkLinkedin(data.linkedin).message : ''}
					</ErrorText>
				</LabelStyles>
				<InputStyles
					type='text'
					name='linkedin'
					placeholder='Enter your linkedin link. Eg: linkedin.com/in/username'
					id={errors.linkedin ? 'error' : ''}
					value={data.linkedin}
					onChange={checkChange}
				/>
			</FormItem>
			<FormItem>
				<LabelStyles>
					Discord *{' '}
					<ErrorText>
						{errors.discord ? checkDiscord(data.discord).message : ''}
					</ErrorText>
				</LabelStyles>
				<InputStyles
					type='text'
					name='discord'
					placeholder='Enter your discord tag. Eg: Name#1234'
					id={errors.discord ? 'error' : ''}
					value={data.discord}
					onChange={checkChange}
				/>
			</FormItem>
			<FlexContainer>
				<FontAwesomeIcon
					icon={faArrowCircleLeft}
					style={{ fontSize: 64, color: 'white', cursor: 'pointer' }}
					onClick={routeFormZero}
				/>
				<FontAwesomeIcon
					icon={faArrowCircleRight}
					style={{ fontSize: 64, color: 'white', cursor: 'pointer' }}
					onClick={routeFormTwo}
				/>
			</FlexContainer>
		</Section>
	);
};

export default FormOne;
