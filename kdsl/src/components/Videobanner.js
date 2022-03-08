import React from 'react';
import ButtonSq from './ButtonSq';

const Videobanner = () => {
	return (
		<>
			<div className="videobanner mb-12 h-60 w-auto bg-slate-800 flex items-center">
				<div className="videobanner__desc px-20 py-14 relative">
					<h3 className="videobanner__title text-gray-300 text-left text-lg uppercase font-semibold">
						<p>Live what you love, </p>
						<p>Leave the rest to us.</p>
					</h3>
					<p className="videobanner__desc text-gray-300 text-left text-md font-light tracking-wider mt-4"> Don't worry. You are not alone.<br/>You are not just good at study. Study is not good at you.</p>
          			<ButtonSq text='here'/>
				</div>
				<div className="videobanner__video w-full h-full bg-slate-400 px-20"></div>
				<div className="mb-4">a</div>
        
			</div>
		</>
	);
};

export default Videobanner;
