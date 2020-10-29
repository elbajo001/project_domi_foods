import React,{Component} from 'react';

class Step1 extends Component{
	state ={
		username: this.props.username || "",
		email: this.props.email || "",
		password: this.props.password || "",
		password2: this.props.password2 || ""
	};

	handleEmailAddressUpdate = evt => {
		this.setState({email: evt.target.value});
	}

	handleAddressLocationUpdate = evt => {
		this.setState({address_location: evt.target.value});
	}


	handlePassword1Update = evt => {
		this.setState({password: evt.target.value});
	}

	handlePassword2Update = evt => {
		this.setState({password2: evt.target.value});
	}

	handleUserNameUpdate = evt => {
		this.setState({username: evt.target.value});
	}

	handleFormSubmit = (evt) => {
    	evt.preventDefault();
    	this.props.onFormSubmit({ ...this.state });
  	};

	render(){
		return(
			<form onSubmit={this.handleFormSubmit}>
				<div className="form-row justify-content-center">


					<div className="form-group col-md-4">
			 		<label className="form-control-label">Correo Electrónico</label>
			 		<input 
			 			className="form-control" 
			 			type="text"
			 			name="correo"
			 			id="correo"
			 			onChange={this.handleEmailAddressUpdate}
			 		/>
			 		</div>

			    	<div className="form-group col-md-2">
			    		<label className="form-control-label">Nombre de usuario</label>
			 			<input 
			 				className="form-control" 
			 				type="text"
			 				name="usuario"
			 				id="usuario"
			 				onChange={this.handleUserNameUpdate}
			 			/>
			    	</div>

			    	<div className="form-group col-md-2">
			    		<label className="form-control-label">Contraseña</label>
			 			<input 
			 				className="form-control" 
			 				type="password"
			 				name="contraseña"
			 				id="contraseña"
			 				onChange={this.handlePassword1Update}
			 			/>
			    	</div>

					<div className="form-group col-md-2">
			    		<label className="form-control-label">Confirmar Contraseña</label>
			 			<input 
			 				className="form-control" 
			 				type="password"
			 				name="contraseña2"
			 				id="contraseña2"
			 				onChange={this.handlePassword2Update}
			 			/>
			    	</div>			    
			    </div>
			    <div className="container mt-2" align="center">
			 		<button className="btn btn-primary" type="submit">Continuar</button>
			 	</div>
			</form>
		);
	}
}

export default Step1;