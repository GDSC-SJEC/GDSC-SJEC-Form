import { useState } from 'react';
import {
	ErrorText,
	FormItem,
	InputStyles,
	LabelStyles,
	Section,
} from '../../styles/index.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import {
	checkDiscord,
	checkEmail,
	checkGitHub,
	checkLinkedin,
	checkName,
} from '../../utils/validation';
import { toast } from 'react-hot-toast';

const FormOne = ({ slideForm, data, handleChange }) => {
	const [errors, setErrors] = useState({
		name: false,
		email: false,
		github: false,
		linkedin: false,
		discord: false,
	});

	const routeFormTwo = () => {
		if (
			checkName(data.name).valid &&
			checkEmail(data.email).valid &&
			checkGitHub(data.github).valid &&
			checkLinkedin(data.linkedin).valid &&
			checkDiscord(data.discord).valid
		) {
			slideForm(2);
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
			case 'name':
				setErrors({ ...errors, name: !checkName(e.target.value).valid });
				break;
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
					Name *
					<ErrorText>
						{errors.name ? checkName(data.name).message : ''}
					</ErrorText>{' '}
				</LabelStyles>
				<InputStyles
					type='text'
					name='name'
					placeholder='Enter your name'
					id={errors.name ? 'error' : ''}
					value={data.name}
					onChange={checkChange}
				/>
			</FormItem>
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
					placeholder='Enter your github link'
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
					placeholder='Enter your linkedin link'
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
			<FontAwesomeIcon
				icon={faArrowCircleRight}
				style={{ fontSize: 64, color: 'white', cursor: 'pointer' }}
				onClick={routeFormTwo}
			/>
		</Section>
	);
};

export default FormOne;
