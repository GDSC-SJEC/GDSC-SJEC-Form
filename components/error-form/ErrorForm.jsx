import Lottie from 'react-lottie';
import * as animationData from '../../data/form-failed.json';

import { Section } from '../../styles/index.styles';
import { AnchorStyles, Result } from './ErrorForm.styles';

const FormThree = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	return (
		<Section>
			<Result>
				<Lottie
					options={defaultOptions}
					className='lottie-animation'
					height={300}
					width={300}
					isStopped={false}
					isPaused={false}
				/>
				<h2>Your response didn&apos;t go through!</h2>
				<AnchorStyles href='mailto:gdsc@sjec.ac.in'>
					Please contact us
				</AnchorStyles>
			</Result>
		</Section>
	);
};

export default FormThree;
