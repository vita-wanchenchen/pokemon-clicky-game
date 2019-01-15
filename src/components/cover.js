import React from 'react';

const Cover = () => {
	return (
		<div className='parallax-container center-align valign-wrapper'>
			<div className='section no-pad-bot'>
				<div className='container'>
					<div className='row'>
					    <h2 className='header col s12 light'>Pokemon Clicky Game</h2>
						<h4 className='header col s12 light'>Don't click on any image more than once!</h4>
					</div>
				</div>
			</div>
			<div className='parallax'>
				<img src='assets/images/pokemon-bg.jpg' alt='Cover' />
			</div>
		</div>
	);
};
export default Cover;