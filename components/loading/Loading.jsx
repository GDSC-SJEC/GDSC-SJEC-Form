import Lottie from 'react-lottie';
import * as animationData from '../../data/google-loading.json';
import { LoadingContainer, LoadingText } from './Loading.styles';

const Loading = ({ text }) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	return (
		<LoadingContainer>
			<Lottie
				options={defaultOptions}
				className='lottie-animation'
				height={200}
				width={200}
				isStopped={false}
				isPaused={false}
			/>
			<LoadingText>{text}</LoadingText>
		</LoadingContainer>
	);
};

export default Loading;
