import React,{Component} from 'react';
import Signup from './my_components/signup_form';

class Registry extends Component{

	/*Lógica de registro*/

	render(){
		return(
			<div className="jumbotron justify-content-center alert-info" align="center">
			<div className="jumbotron alert-primary" align="center">
				<h2 className="text-primary font-weight-bold">Registrate en DomiFoods!</h2>
				<hr/>
				<Signup/>
			</div>
			</div>
		);
	}
}

export default Registry;