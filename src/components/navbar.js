import React from 'react';

const NavBar = ({ score, topScore, message }) => {
	return (
		<div className='navbar-fixed'>
			<nav>
				<div className='nav-wrapper row yellow center-align flow-text'>
					<div className='col s4'>
						<a href='/'><b className='blue-text'>Pokemon Clicky Game</b></a>
					</div>
					<div className='col s4'>
						<span className='black-text'>{message}</span>
					</div>
					<div className='col s4'>
						<span className='blue-text'>Score: {score} | Top Score: {topScore}</span>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;