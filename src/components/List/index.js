import React,{Component} from "react";
import "./index.module.scss";
import axios from "axios";
class List extends Component{
	constructor(props){
		super(props);
		this.state={
			datalist:[]
		}
	}

	componentDidMount(){
		axios.get("/napi/buy/category/list/?timestamp=1543885511000").then(res=>{
            console.log(res.data.data.object_list)
            this.setState({
            	datalist:res.data.data.object_list
            })
        })
	}


	render(){

		return <div>List
		
			
		</div>
	}
	
}

export default List;