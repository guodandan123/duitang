import { BrowserRouter as Router, Route ,Redirect,Switch} from "react-router-dom";
import React from "react";
import App from "../App";
import Cart from "../components/Cart";
import Classify from "../components/Classify";
import Detail from "../components/Detail";
import Home from "../components/Home";
import List from "../components/List";
import List_Detail from "../components/List_detail";
import More from "../components/More";
import Shop from "../components/Shop";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Default from "../components/Classify/Default";
import Hot from "../components/Classify/Hot";
import New from "../components/Classify/New";
import Price from "../components/Classify/Price";


const router = <Router>
	<App>
	    <Switch>
			<Route path="/cart" component ={Cart}/>
			{/*<Route path="/classify" component ={Classify}/>*/}
			<Route path="/classify" render={()=>
				<Classify>
					<Route path="/classify/default" component ={Default}/>
					<Route path="/classify/hot" component ={Hot}/>
					<Route path="/classify/new" component ={New}/>
					<Route path="/classify/price" component ={Price}/>
				</Classify>
			}/>
			<Route path="/detail" component ={Detail}/>
			<Route path="/home" component ={Home}/>
			<Route path="/list" component ={List}/>
			<Route path="/listDetail/:id" component ={List_Detail}/>
			<Route path="/more" component ={More}/>
			<Route path="/shop" component ={Shop}/>
			<Redirect from="/" to="/home"/>
		</Switch>
	</App>
</Router>


export default router;