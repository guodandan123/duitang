import React,{Component} from "react";
import "./index.module.scss";
import {NavLink} from "react-router-dom";

class Classify extends Component{

	render(){
		return <div>Classify
			<ul>
				<li><NavLink to="/classify/default" activeClassName="myactive">默认</NavLink></li>
				<li><NavLink to="/classify/hot" activeClassName="myactive">热度</NavLink></li>
				<li><NavLink to="/classify/new" activeClassName="myactive">新品</NavLink></li>
				<li><NavLink to="/classify/price" activeClassName="myactive">价格</NavLink></li>
			</ul>

		{this.props.children}
		</div>
	}
}

export default Classify;