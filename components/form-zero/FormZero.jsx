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
	checkName,
	checkSection,
	checkSemester,
	checkUSN,
} from '../../utils/validation';
import { toast } from 'react-hot-toast';

const FormZero = ({ slideForm, data, handleChange, setDirection }) => {
	const [errors, setErrors] = useState({
		name: false,
		usn: false,
		semester: false,
		section: false,
	});

	const routeFormTwo = () => {
		if (
			checkName(data.name).valid &&
			checkUSN(data.usn).valid &&
			checkSemester(data.semester).valid &&
			checkSection(data.section).valid
		) {
			slideForm(1);
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
			case 'name':
				setErrors({ ...errors, name: !checkName(e.target.value).valid });
				break;
			case 'usn':
				setErrors({ ...errors, usn: !checkUSN(e.target.value).valid });
				break;
			case 'semester':
				setErrors({
					...errors,
					semester: !checkSemester(e.target.value).valid,
				});
				break;
			case 'section':
				setErrors({
					...errors,
					section: !checkSection(e.target.value).valid,
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
					USN *{' '}
					<ErrorText>{errors.usn ? checkUSN(data.usn).message : ''}</ErrorText>
				</LabelStyles>
				<InputStyles
					type='text'
					name='usn'
					placeholder='Enter your USN. Eg: 4SO19CS001'
					id={errors.usn ? 'error' : ''}
					value={data.usn}
					onChange={checkChange}
				/>
			</FormItem>
			<FormItem>
				<LabelStyles>
					Semester *{' '}
					<ErrorText>
						{errors.semester ? checkSemester(data.semester).message : ''}
					</ErrorText>
				</LabelStyles>
				<InputStyles
					type='text'
					name='semester'
					placeholder='Enter your semester (2022-23). Eg: 5'
					id={errors.semester ? 'error' : ''}
					value={data.semester}
					onChange={checkChange}
				/>
			</FormItem>
			<FormItem>
				<LabelStyles>
					Section *{' '}
					<ErrorText>
						{errors.section ? checkSection(data.section).message : ''}
					</ErrorText>
				</LabelStyles>
				<InputStyles
					type='text'
					name='section'
					placeholder='Enter your section. Eg: A'
					id={errors.section ? 'error' : ''}
					value={data.section}
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

export default FormZero;
