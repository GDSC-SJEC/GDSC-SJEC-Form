import styled from 'styled-components';

export const BackgroundContainer = styled.div`
	background: url('./images/background.png') no-repeat fixed;
	color: #fff;
	font-family: 'Poppins', sans-serif;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	@media screen and (max-width: 768px) {
		height: unset;
	}
`;

export const FormContainer = styled.div`
	display: flex;
	width: 600px;
	height: 800px;
	background-color: #2c2728;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 60px;
	border-radius: 20px;

	@media screen and (max-width: 768px) {
		padding: 40px 0;
		width: 95%;
		height: 850px;
		margin: 20px 0;
	}
`;

export const CheckboxContainer = styled.div`
	padding: 10px 0;
`;

export const Checkbox = styled.input`
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	margin: 0 3px;
	border-radius: 50%;
	background-color: #fff;
	width: 8px;
	height: 8px;

	&:checked {
		background-color: #fff;
		transform: scale(1.6);
	}
`;

export const Section = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 80%;
`;

export const FormItem = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
`;

export const LabelStyles = styled.label`
	font-size: 18px;
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		font-size: 16px;
	}
`;

export const ErrorText = styled.span`
	font-size: 12px;
	color: #fc5858;
	margin-left: 10px;

	@media screen and (max-width: 768px) {
		font-size: 12px;
	}
`;

export const NoteText = styled.span`
	font-size: 12px;
	color: #b9b9b9;
	margin-left: 10px;

	@media screen and (max-width: 768px) {
		font-size: 12px;
	}
`;

export const InputStyles = styled.input`
	border: none;
	border-radius: 20px;
	padding: 15px 20px;
	width: 100%;

	&:disabled {
		background-color: #fff;
	}
`;

export const ButtonStyles = styled.div`
	display: flex;
	justify-content: center;
	cursor: pointer;
`;

export const MainButtonStyles = styled.div`
	padding: 10px 20px;
	background-color: #fff;
	display: flex;
	justify-content: center;
	color: #000;
	width: 30%;
	border-radius: 20px;
	cursor: pointer;
`;

export const SecondaryButtonStyles = styled.button`
	background-color: transparent;
	border: 0;
	color: #fff;
	font-size: 18px;
	cursor: pointer;
`;
