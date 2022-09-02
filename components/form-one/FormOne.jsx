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

const FormOne = ({ slideForm, data, handleChange }) => {
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
			alert('Please fill out all fields');
		}
	};

	return (
		<Section>
			<FormItem>
				<LabelStyles>
					Name *<ErrorText>{checkName(data.name).message}</ErrorText>{' '}
				</LabelStyles>
				<InputStyles
					type='text'
					name='name'
					placeholder='Enter your name'
					id={checkName(data.name).valid ? '' : 'error'}
					value={data.name}
					onChange={handleChange}
				/>
			</FormItem>
			<FormItem>
				<LabelStyles>
					Email * <ErrorText>{checkEmail(data.email).message}</ErrorText>
				</LabelStyles>
				<InputStyles
					type='text'
					name='email'
					placeholder='Enter your email'
					id={checkEmail(data.email).valid ? '' : 'error'}
					value={data.email}
					onChange={handleChange}
				/>
			</FormItem>
			<FormItem>
				<LabelStyles>
					GitHub * <ErrorText>{checkGitHub(data.github).message}</ErrorText>
				</LabelStyles>
				<InputStyles
					type='text'
					name='github'
					placeholder='Enter your github link'
					id={checkGitHub(data.github).valid ? '' : 'error'}
					value={data.github}
					onChange={handleChange}
				/>
			</FormItem>
			<FormItem>
				<LabelStyles>
					LinkedIn *{' '}
					<ErrorText>{checkLinkedin(data.linkedin).message}</ErrorText>
				</LabelStyles>
				<InputStyles
					type='text'
					name='linkedin'
					placeholder='Enter your linkedin link'
					id={checkLinkedin(data.linkedin).valid ? '' : 'error'}
					value={data.linkedin}
					onChange={handleChange}
				/>
			</FormItem>
			<FormItem>
				<LabelStyles>
					Discord * <ErrorText>{checkDiscord(data.discord).message}</ErrorText>
				</LabelStyles>
				<InputStyles
					type='text'
					name='discord'
					placeholder='Enter your discord tag. Eg: Name#1234'
					id={checkDiscord(data.discord).valid ? '' : 'error'}
					value={data.discord}
					onChange={handleChange}
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
