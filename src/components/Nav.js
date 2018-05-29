import React from 'react';
import NavList from './NavList';

export default class Nav extends React.Component {
	constructor(props){
		super(props);
		
		this.state={
			NavData:[
				{name:'nav1',url:'todo connect to A url'},
				{name:'nav2',url:'todo connect to B url'},
				{name:'nav3',url:'todo connect to C url'}
			]
		}
		
	};
	
	handleClick(key){
		console.log(this.state.NavData[key].url);
	}
	
    render(){
        const mapToData = (data) => {
			console.log(data);
			return data.map((contact, i) => {
                return (
					<NavList name={contact} key={i} onClick={ () => this.handleClick(i) } />
				);
            });
        };
		
		return(
			<div>{mapToData(this.state.NavData)}</div>
		);
    }
	
	
}
/*
Nav.propTypes={
	name:PropTypes.string
}
*/