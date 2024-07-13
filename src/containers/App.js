import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends React.Component{
	constructor(){
		super();
		this.state={
			searchValue: '',
			robots: []
		}
	}

	onSearchChange = (event) => {
		this.setState({searchValue: event.target.value});
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then((response)=>{
			this.setState({robots: response});
		});
	}

	render(){
		const { searchValue, robots } = this.state;
		const filteredRobots = robots.filter((robot)=>{
			return robot.name.toLowerCase().includes(searchValue.toLowerCase());

		});
		if(robots.length === 0){
			return <h1 className='tc'>Loading</h1>;
		}else{
			return(
				<div className='tc'>
			      <div>
			        <h1 className='f1'>RoboFriends</h1>
			        <SearchBox searchChange={this.onSearchChange}/>
			      </div>
			      <Scroll>
			      	<ErrorBoundary>
			      		<CardList robots={filteredRobots}/>
			      	</ErrorBoundary>
			      </Scroll>
			    </div>
			);
		}
	};
}

export default App;