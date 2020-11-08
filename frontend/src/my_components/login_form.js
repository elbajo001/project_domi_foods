import React, { Component } from "react";


class LoginForm extends Component{
	/*Componente del formulario de autenticación del usuario administrador de restaurantes*/
	
	state = {
		username: this.props.username || "",
		password: this.props.password || "",
	};

	handleUserNameUpdate = evt => {
		this.setState({username: evt.target.value});
	}

	handlePasswordUpdate = evt =>{
		this.setState({password: evt.target.value});
	}

	
	handleFormSubmit = (evt) => {
    	evt.preventDefault();
    	this.props.onFormSubmit({ ...this.state });
  	};


	render(){
		return(
			<form onSubmit={this.handleFormSubmit}>
				<div className="form-group row mt-5">
				   <label className="col-sm-4 col-form-label form-control-sm">Usuario</label>
				   <div className="col-sm-6">
				   <input 
				   		className="form-control-sm" 
				   		type="text"
				   		placeholder="nombre de usuario"
				   		name="username"
				   		id="username"
				   		onChange={this.handleUserNameUpdate}
				   	/>
				   </div>
				</div>

				<div className="form-group row">
					<label className="col-sm-4 col-form-label form-control-sm">Contraseña</label>
					<div className="col-sm-6">
					<input 
						className="form-control-sm" 
						type="password"
						placeholder="contraseña"
						name="password"
						id="password"
						onChange={this.handlePasswordUpdate}
					/>
					</div>
				</div>

				<div className="container mt-4">
					<button 
						className="btn btn-primary" 
						type="submit"
					>
						Iniciar Sesión
					</button>
				</div>
			</form>
		);
	}
}

export default LoginForm;