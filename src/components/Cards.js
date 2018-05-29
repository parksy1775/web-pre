import React from 'react';
import RankList from './RankList';
import Card from './Card';

export default class Cards extends React.Component{
	constructor(props){
		super(props);
		
		this.state={
			rank:{
			width:'30%',
			float:'left',
			background:'#ff0'
			},
			cards:{
				width:'70%',
				float:'right',
				background:'#00f'
			},
			second:{
				width:'100%',
				padding:'100 px'
			},
			List:[
				{value:'A'},
				{value:'B'},
				{value:'C'}
			],
			Card:[[
				{img_url:'select1 img1'},
				{img_url:'select1 img2'},
				{img_url:'select1 img3'},
				{img_url:'select1 img4'},
				{img_url:'select1 img5'},
			],[
				{img_url:'select2 img1'},
				{img_url:'select2 img2'},
				{img_url:'select2 img3'},
				{img_url:'select2 img4'},
				{img_url:'select2 img5'},
			],[
				{img_url:'select3 img1'},
				{img_url:'select3 img2'},
				{img_url:'select3 img3'},
				{img_url:'select3 img4'},
				{img_url:'select3 img5'},
			]
			
			],
			w:{width:'30%'},
			selectedKey:0
		}
	}
	handleClick(key){
		this.setState({
			selectedKey:key
		});
	}

	
	render(){	
		const mapToData = (data) => {
			console.log(data);
			return data.map((contact, i) => {
				return (
					<RankList name={contact} key={i} onClick={ () => this.handleClick(i) } />
				);
			});
		};
		
		const mapToData2 = (data) => {
			console.log(data);
			return data.map((contact, i) => {
				return (
					<Card sty={this.state.w} name={contact} key={i} onClick={ () => this.handleClick(i) } />
				);
			});
		};
		
		return(
			<div>
				<div style={this.state.second}>오늘의 BOX OFFICE</div>
				<div>
					<div style={this.state.rank}>
						<div>{mapToData(this.state.List)}</div>
					</div>
					<div style={this.state.cards}>{mapToData2(this.state.Card[this.state.selectedKey])}</div>
				</div>
				
			</div>
		);
	}
}