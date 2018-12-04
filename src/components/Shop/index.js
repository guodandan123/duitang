import React,{Component} from "react";
import "./index.module.scss";
import {NavLink} from "react-router-dom";
class Shop extends Component{

	render(){
		return <div>Shop
			{/*<button onClick={this.handleClick.bind(this)}>click to detail+:id</button>*/}
			<NavLink to="/classify" activeClassName="myactive">click to 分类+:id</NavLink>
		</div>
	}

	handleClick(){
		console.log('click')

		// console.log(this.props)
	}
}

export default Shop;