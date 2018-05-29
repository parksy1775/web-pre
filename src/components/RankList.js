import React from 'react';
export default class RankList extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return(
			<div onClick={this.props.onClick} >{this.props.name.value}</div>
		)
	}
}