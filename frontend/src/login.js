import React, { Component } from 'react';
import LoginForm from './my_components/login_form';


class Login extends Component {
	/*Componente que despliega la funcionalidad de inicio de sesión*/

	/*Parámetros: 
	  * dirección ip del host que establece conexión con el servidor.
	  * credenciales del usuario que desea iniciar sesión: usuario y contraseña.
	  * diccionario que almacena la respuesta del servidor.
	*/

	state = {
		dir_ip: "192.168.0.18",
		user: {
			username: "",
			password: ""
		},

		result: {
			non_field_errors: "",
			answer: "",
			document: "",
			expiry: "",
			token: ""
		},
		id: ""
	};


	//se inicializan el usuario y contraseña en vacíos.
	componentDidMount() {
		this.setState({ username: "" });
		this.setState({ password: "" });
	}

	//función que permite envío de los datos del formulario hacia el servicio de login del servidor.
	handleFormSubmit = (user) => {
		this.login_user(user);
	};


	//Servicio de login y/o autenticación del servidor para acceder a la cuenta si existe, de 
	//la plataforma DomiFoods web.
	login_user = (user) => {
		fetch(`http://${this.state.dir_ip}:8000/accounts/api/login/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		}).then(response => response.json())
			.then((data) => {
				this.setState({ result: data });
				if (this.state.result.answer === "True") {
					//alert(this.state.result.answer);
					this.props.history.push(`/admin/${this.state.result.document}`);
				}
			});
	}

	//función que renderiza el contenido de este componente.
	render() {
		return (
			<div className="jumbotron alert-danger col-4 col-auto mb-2 ml-auto mr-auto" align="center">
				<img src="https://icon-library.com/images/restaurant-icon-png/restaurant-icon-png-21.jpg" height="100" width="100" align="left" alt="login" />
				<h2 className="text-danger font-weight-bold">Login</h2>
				<hr />
				<LoginForm
					username={this.state.user.username}
					password={this.state.user.password}
					onFormSubmit={this.handleFormSubmit}
				/>

				<div className="alert-warning mt-2">
					<p>
						{this.state.result.non_field_errors}
					</p>
				</div>
			</div>
		);
	}
}

export default Login;