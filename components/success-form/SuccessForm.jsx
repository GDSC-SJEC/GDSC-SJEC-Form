import Lottie from 'react-lottie';
import * as animationData from '../../data/google-success.json';

import { Section } from '../../styles/index.styles';
import { AnchorStyles, Result } from './SuccessForm.styles';

const SuccessForm = () => {
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
				<h2>Your response has been recorded!</h2>
				<p style={{ paddingBottom: '2rem' }}>
					Don&rsquo;t forget to introduce yourself on our discord server.
				</p>
				<AnchorStyles href='mailto:gdsc@sjec.ac.in'>
					Made a mistake? Contact us
				</AnchorStyles>
			</Result>
		</Section>
	);
};

export default SuccessForm;
