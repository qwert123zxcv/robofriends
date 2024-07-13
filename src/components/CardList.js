import React from 'react';
import Card from './Card'; 

const list = ({ robots })=>{
	const cardArray = robots.map((user, i)=>{
		return <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>;
	});
	return cardArray;
}

export default list;