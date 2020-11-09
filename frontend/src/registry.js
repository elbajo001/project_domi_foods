import React,{Component} from 'react';
//import Signup from './my_components/signup_form';
import Step1 from './my_components/user_form';

class Registry extends Component{

	/*Componente que despliega la funcionalidad del registro del usuario
	*administrador a la plataforma domifoods web. Este proceso se hace en tres pasos:
	*1. se registra primero las credenciales de acceso
	*2. si el registro es exitoso, se direcciona al formulario donde se piden los datos
	*personales del usuario.
	*3. si este proceso es exitoso, se direcciona a un mensaje de aviso que indica 
	*que la persona identificada con el documento proporcionado será registrada como
	*administrador de restaurantes en la plataforma. si el proceso es exitoso finalmente
	se direcciona al panel de administración de domifoods web para empezar a usar la cuenta.*/

	/*los parámetros son las credenciales de acceso del usuario,
	*el resultado del registro y la dirección ip del host que establece conexión con
	*el servidor*/
	
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


		dir_ip:"192.168.88.9",
	};


	//función que dirige la información consignada en el formulario de registro del usuario,
	//hacia la funcion de registro proporcionada por el servidor.

	handleFormSubmit = (user_django) => {
     	this.createUserDjango(user_django);
     };

     
     //función que permite la creación del usuario dentro del servidor del back-end, que en este caso
     //es django. para que éste pueda ser registrado como administrador más adelante y acceda a las
     //funcionalidades previstas para él.
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


	//función que renderiza el contenido de este componente.
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
