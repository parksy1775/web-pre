import React from 'react';

export default class Card extends React.Component{
	constructor(props){
		super(props);
		this.state={
			width:'30%',
			float:'left'
		}
	}
	
	render(){
		return(
			<span>
				<div style={this.state}>{this.props.name.img_url}</div>
			</span>
		)
	}
}