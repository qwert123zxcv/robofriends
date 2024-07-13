import React from 'react';

const Searchbox = ({ searchChange })=>{
	return(
		<input className='pa3 ba b--green bg-lightest-blue mb1' type='search' placeholder='Search Robots' onChange={searchChange}/>
	);
};

export default Searchbox;