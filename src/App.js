import React, { Component } from 'react';
import Cardlist from './Cardlist';
import { Robots } from './Robots';
import SearchBox from './SearchBox.js';
import Scroll from './Scroll.js';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			Robots : [],
	        Searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=> this.setState({ Robots: users}));
	}

	 onSearchChange = (event) => {
		this.setState({ Searchfield: event.target.value })
	}

	render() {
		const filteredRobots = this.state.Robots.filter(Robots =>{
		  return Robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase());
		})
		if (this.state.Robots.lenght === 0) {
			return <h1>Laoding</h1>
		} else {
	  return (
		<div className='tc'>
		    <h1 className='f1'>Robots Friends</h1>
		    <SearchBox  SearchChange={this.onSearchChange}/>
		    <Scroll>
		    <Cardlist Robots={filteredRobots} />
		    </Scroll>
		</div>

		);
	  }
    }
} 

export default App;