import React,{Component} from "react";
import "./index.module.scss";
import {NavLink} from "react-router-dom";
class Default extends Component{

	render(){
		return <div>Default
			<NavLink to="/detail" activeClassName="myactive">click to detail</NavLink>
		</div>
	}
}

export default Default;

