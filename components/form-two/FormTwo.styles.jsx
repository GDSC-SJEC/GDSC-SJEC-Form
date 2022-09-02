import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const IconWrapper = styled.span`
	padding: 0 10px;
	border-radius: 50%;
	margin-left: 6px;
	background-color: #3b3b3b;
	margin-bottom: 2px;
	cursor: pointer;
`;

export const Container = styled.div`
	position: relative;
`;

export const FontAwesomeIconStyles = styled(FontAwesomeIcon)`
	position: absolute;
	right: 12px;
	top: 12px;
`;

export const DropdownContainer = styled.div`
	position: absolute;
	height: 192px;
	width: 90%;
	background-color: #ffffff;
	top: 73px;
	left: 5%;
	z-index: 1;
	padding: 10px;
`;

export const DropdownItem = styled.label`
	color: #000;
	display: flex;
	gap: 10px;
	cursor: pointer;
`;

export const DropdownCheckbox = styled.input``;

// Modal styles

export const ModalContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50px 0;
	width: 100%;
`;

export const ModalTitle = styled.div`
	font-size: 32px;
	font-weight: 500;

	@media screen and (max-width: 768px) {
		font-size: 24px;
	}
`;

export const ModalContent = styled.div`
	padding-top: 30px;
	width: 60%;
`;

export const CloseButton = styled.div`
	position: absolute;
	right: 50px;
	top: 30px;
	text-align: left;
	font-size: 24px;
	cursor: pointer;
	@media screen and (max-width: 768px) {
		font-size: 18px;
	}
`;

export const ModalText = styled.div`
	font-size: 18px;
	@media screen and (max-width: 768px) {
		font-size: 16px;
	}
`;

export const ModalImage = styled.img`
	margin-top: 20px;
	width: 300px;
	height: 300px;

	@media screen and (max-width: 768px) {
		width: 250px;
		height: 250px;
	}
`;
