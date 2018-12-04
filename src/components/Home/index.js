import React,{Component} from "react";
import "./index.module.scss";
import {NavLink} from "react-router-dom";
import axios from "axios";
import ReactSwipe from 'react-swipe';

class Home extends Component{
	constructor(props){
		super(props);
		this.state={
			datalist:[]
		}
	}

	componentDidMount(){
		axios.get("/napi/mbanner/?app_code=mdt").then(res=>{
            console.log(res.data.data.object_list)
            this.setState({
            	datalist:res.data.data.object_list
            })
        })
	}

	render(){
		return <div>Home

			<ReactSwipe
			       className="carousel"
			       swipeOptions={{ continuous: true, auto:2000}}
			       key={this.state.datalist.length}
			     >
			       {
			       	this.state.datalist.map(item=>
			       			<img src={item.image} key={item._id}/>
			       		)
			       }
			</ReactSwipe>


			<ul>
				<li><NavLink to="/list" activeClassName="myactive">良品购</NavLink></li>
				<li><NavLink to="/shop" activeClassName="myactive">商店</NavLink></li>
				<li><NavLink to="/list" activeClassName="myactive">美食菜谱</NavLink></li>
				<li><NavLink to="/list" activeClassName="myactive">家居生活</NavLink></li>
				<li><NavLink to="/list" activeClassName="myactive">壁纸</NavLink></li>
				<li><NavLink to="/list" activeClassName="myactive">头像</NavLink></li>
				<li><NavLink to="/list" activeClassName="myactive">表情</NavLink></li>
				<li><NavLink to="/more" activeClassName="myactive">更多</NavLink></li>


			</ul>
		</div>
	}
}

export default Home;