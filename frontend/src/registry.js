import React,{Component} from 'react';
//import Signup from './my_components/signup_form';
import Step1 from './my_components/user_form';

class Registry extends Component{

	/*Lógica de registro*/
	state = {

		user_django:{
			username:"",
			email:"",
			password:"",
			password2:""
		},

		result:{
			answer:"",
			id:"",
			token:""
		},


		dir_ip:"192.168.43.52",
	};


	handleFormSubmit = (user_django) => {
     	this.createUserDjango(user_django);
     };

     

	createUserDjango(user_django){
		alert(user_django.username);
		//primero se registra en usuarios del framework usado en el back: django
		fetch(`http://${this.state.dir_ip}:8000/accounts/api/user_register/`, {
      		 method: "POST",
      		 headers: {
        	 "Content-Type": "application/json",
      		},
      		body: JSON.stringify(user_django),
    	}).then(response => response.json())
		  .then((data) => {
		  		this.setState({result: data});
		  		this.props.history.push(`/user_restaurant/${this.state.result.id}`);
		    });	
	}


	render(){
		return(
			<div className="jumbotron justify-content-center alert-info" align="center">
			<div className="jumbotron alert-primary" align="center">
				<h2 className="text-primary font-weight-bold">Registrate en DomiFoods!</h2>
				<hr/>
				<Step1
    	   		email={this.state.user_django.email}
    			username={this.state.user_django.username}
				password={this.state.user_django.password}
				password2={this.state.user_django.password2}
				onFormSubmit={this.handleFormSubmit}
				/>
				<div className="mt-3 alert-warning">
					{this.state.result.answer}
				</div>

			</div>
			</div>
		);
	}
}

export default Registry;