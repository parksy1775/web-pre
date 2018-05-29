import React from 'react';
import Nav from './Nav';
import Cards from './Cards';
export default class App extends React.Component {
    render(){

        return (
			<h1>
				Title
				<Nav/>
				<Cards/>
			</h1>
        );
    }
}
