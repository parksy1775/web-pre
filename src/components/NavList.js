import React from 'react';
export default class NavList extends React.Component{
	render(){
		return(
			<div onClick={this.props.onClick}>{this.props.key}. {this.props.name.name}</div>
		);
	}
}

//TODO merge All list