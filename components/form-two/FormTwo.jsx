import {
	ButtonStyles,
	ErrorText,
	FormItem,
	InputStyles,
	LabelStyles,
	MainButtonStyles,
	NoteText,
	SecondaryButtonStyles,
	Section,
} from '../../styles/index.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCircleChevronDown, faInfo } from '@fortawesome/free-solid-svg-icons';
import {
	CloseButton,
	Container,
	DropdownCheckbox,
	DropdownContainer,
	DropdownItem,
	DropdownTitle,
	FontAwesomeIconStyles,
	IconWrapper,
	ModalContainer,
	ModalContent,
	ModalImage,
	ModalText,
	ModalTitle,
} from './FormTwo.styles';

import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import { checkDomain } from '../../utils/validation';
import { toast } from 'react-hot-toast';

const customStyles = {
	overlay: {
		backgroundColor: 'rgba(25, 23, 23, 0.91)',
	},
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: '#2C2728',
		border: 0,
		color: 'white',
	},
};

const FormTwo = ({
	slideForm,
	data,
	handleChange,
	setFormData,
	slideResult,
	setLoading,
	setDirection,
}) => {
	const [isOpen, setIsOpen] = useState(true);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [domainsArray, setDomainsArray] = useState([]);
	const [changedOnce, setChangedOnce] = useState(false);

	useEffect(() => {
		console.log(data.domains);
		if (data.domains !== '') {
			setDomainsArray(data.domains.split(', '));
		}
	}, [data.domains]);

	useEffect(() => {
		if (domainsArray.length < 1 && changedOnce) {
			setErrors({ ...errors, domains: true });
		} else {
			setErrors({ ...errors, domains: false });
		}
	}, [domainsArray, changedOnce, errors]);

	const openDropdown = () => setDropdownOpen(!dropdownOpen);

	const handleCheckbox = (e) => {
		const { value } = e.target;
		if (e.target.checked) {
			setChangedOnce(true);
			if (domainsArray.length === 2) {
				return toast.error('You can only select at most 2 domains', {
					style: {
						borderRadius: '10px',
						background: '#2c2728',
						color: '#fff',
					},
				});
			}
			setDomainsArray([...domainsArray, value]);
		} else {
			setDomainsArray(domainsArray.filter((domain) => domain !== value));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (checkDomain(domainsArray.join(', ')).valid) {
			console.log(data);
			slideResult(3);
			fetch('/api/submit', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ ...data, domains: domainsArray.join(', ') }),
			})
				.then(() => {
					setFormData({});
					setLoading(false);
				})
				.catch(() => {
					setFormData({});
					slideForm(4);
					setLoading(false);
				});
		} else {
			toast.error('Please fill in all the required fields correctly', {
				style: {
					borderRadius: '10px',
					background: '#2c2728',
					color: '#fff',
				},
			});
		}
	};

	const handleBack = () => {
		console.log(domainsArray);
		setFormData({
			...data,
			domains: domainsArray.join(', '),
		});
		slideForm(1);
		setDirection('left');
	};

	const [errors, setErrors] = useState({
		resume: '',
		domains: '',
	});

	const checkChange = (e) => {
		handleChange(e);
		switch (e.target.name) {
			case 'domains':
				setErrors({
					...errors,
					domains: !checkDomain(e.target.value).valid,
				});
				break;
			default:
				break;
		}
	};

	return (
		<Section>
			<Modal isOpen={isOpen} style={customStyles} contentLabel='Example Modal'>
				<CloseButton onClick={() => setIsOpen(false)}>X</CloseButton>
				<ModalContainer>
					<ModalTitle>Uploading your resume</ModalTitle>
					<ModalContent>
						<ModalText>
							Please upload your resume to your google drive.
						</ModalText>
						<ModalText>
							While sharing the link, please make sure that the link is set to
							public as follow:
						</ModalText>
					</ModalContent>
					<ModalImage src='./images/resume-guide.png' />
				</ModalContainer>
			</Modal>
			<FormItem>
				<LabelStyles>
					Resume Link
					<IconWrapper onClick={() => setIsOpen(true)}>
						<FontAwesomeIcon
							icon={faInfo}
							style={{ fontSize: 14, color: 'white' }}
						/>
					</IconWrapper>
				</LabelStyles>
				<InputStyles
					type='text'
					name='resume'
					placeholder='Enter your resume link'
					value={data.resume}
					onChange={checkChange}
				/>
			</FormItem>
			<FormItem>
				<LabelStyles>
					Domain of Interest *{' '}
					<ErrorText>
						{errors.domains ? checkDomain(domainsArray.join(', ')).message : ''}
					</ErrorText>
				</LabelStyles>
				<Container onClick={openDropdown}>
					<InputStyles
						type='text'
						name='domains'
						placeholder='Select your domains'
						value={domainsArray.join(', ')}
						id={errors.domains ? 'error' : ''}
						onChange={checkChange}
						disabled
					/>
					<FontAwesomeIconStyles
						icon={faCircleChevronDown}
						style={{ fontSize: 24, color: 'black' }}
					/>
				</Container>
				{dropdownOpen && (
					<DropdownContainer>
						<DropdownItem>
							<DropdownTitle>Technical domains</DropdownTitle>
						</DropdownItem>
						<DropdownItem>
							<DropdownCheckbox
								type='checkbox'
								value='Web Development'
								checked={domainsArray.includes('Web Development')}
								onChange={handleCheckbox}
							/>
							Web development
						</DropdownItem>
						<DropdownItem>
							<DropdownCheckbox
								type='checkbox'
								value='Mobile Development'
								checked={domainsArray.includes('Mobile Development')}
								onChange={handleCheckbox}
							/>
							Mobile development
						</DropdownItem>
						<DropdownItem>
							<DropdownCheckbox
								type='checkbox'
								value='Game Development'
								checked={domainsArray.includes('Game Development')}
								onChange={handleCheckbox}
							/>
							Game development
						</DropdownItem>
						<DropdownItem>
							<DropdownCheckbox
								type='checkbox'
								value='UI/UX Design'
								checked={domainsArray.includes('UI/UX Design')}
								onChange={handleCheckbox}
							/>
							UI/UX Design
						</DropdownItem>
						<DropdownItem>
							<DropdownCheckbox
								type='checkbox'
								value='Cloud Computing'
								checked={domainsArray.includes('Cloud Computing')}
								onChange={handleCheckbox}
							/>
							Cloud Computing
						</DropdownItem>
						<DropdownItem>
							<DropdownCheckbox
								type='checkbox'
								value='Competitive Programming'
								checked={domainsArray.includes('Competitive Programming')}
								onChange={handleCheckbox}
							/>
							Competitive Programming
						</DropdownItem>
						<DropdownItem>
							<DropdownCheckbox
								type='checkbox'
								value='AI/ML'
								checked={domainsArray.includes('AI/ML')}
								onChange={handleCheckbox}
							/>
							AI/ML
						</DropdownItem>
						<DropdownItem style={{ marginTop: '12px' }}>
							<DropdownTitle>Non technical domains</DropdownTitle>
						</DropdownItem>
						<DropdownItem>
							<DropdownCheckbox
								type='checkbox'
								value='Public Relations Management'
								checked={domainsArray.includes('Public Relations Management')}
								onChange={handleCheckbox}
							/>
							Public Relations Management
						</DropdownItem>
						<DropdownItem>
							<DropdownCheckbox
								type='checkbox'
								value='Media and Content Creation'
								checked={domainsArray.includes('Media and Content Creation')}
								onChange={handleCheckbox}
							/>
							Media and Content Creation
						</DropdownItem>
					</DropdownContainer>
				)}
			</FormItem>
			<FormItem>
				<LabelStyles>
					Add your projects <NoteText>Separate by commas</NoteText>
				</LabelStyles>
				<InputStyles
					type='text'
					name='projects'
					placeholder='Enter your projects. Eg: github.com/username/project'
					value={data.projects}
					onChange={handleChange}
				/>
			</FormItem>
			<FormItem>
				<LabelStyles>
					Other skills <NoteText>Separate by commas</NoteText>
				</LabelStyles>
				<InputStyles
					type='text'
					name='skills'
					placeholder='Enter your skills. Eg: hackerrank.com/username'
					value={data.skills}
					onChange={handleChange}
				/>
			</FormItem>
			<FormItem>
				<LabelStyles>
					Other Interests <NoteText>Separate by commas</NoteText>
				</LabelStyles>
				<InputStyles
					type='text'
					name='interests'
					placeholder='Enter your interests. Eg: Hobbies'
					value={data.interests}
					onChange={handleChange}
				/>
			</FormItem>
			<ButtonStyles>
				<MainButtonStyles onClick={handleSubmit}>Submit</MainButtonStyles>
			</ButtonStyles>

			<ButtonStyles>
				<SecondaryButtonStyles onClick={handleBack}>Back</SecondaryButtonStyles>
			</ButtonStyles>
		</Section>
	);
};

export default FormTwo;
