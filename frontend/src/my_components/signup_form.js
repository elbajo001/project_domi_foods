import React,{Component} from 'react';


class Signup extends Component{
	//Componente que despliega el formulario de inicio de sesión.

	state ={
			user: this.props.user || "",
			document_type: this.props.document_type || "",
    		document: this.props.document || "",
   			first_name: this.props.first_name || "",
   			last_name: this.props.last_name || "",
   			genre: this.props.genre || "",
    		phone_num: this.props.phone_num || "",
   			date_of_birth: this.props.date_of_birth || "",
    	    email_address: this.props.email_address || "",
    		address_location: this.props.address_location || "",
	};

	handleDocumentTypeUpdate (evt) {
		alert(evt.target.value);
		this.setState({document_type: evt.target.value});
	}


	handleDocumentUpdate = evt => {
		this.setState({document: evt.target.value});
	}

	handleFirstNameUpdate = evt => {
		this.setState({first_name: evt.target.value});
	}

	handleLastNameUpdate = evt => {
		this.setState({last_name: evt.target.value});
	}

	handleGenreUpdate(evt) {
		this.setState({genre: evt.target.value});
	}

	handlePhoneNumUpdate = evt => {
		this.setState({phone_num: evt.target.value});
	}

	handleDateofBirthUpdate = evt => {
		this.setState({date_of_birth: evt.target.value});
	}

	handleEmailAddressUpdate = evt => {
		this.setState({email_address: evt.target.value});
	}

	handleAddressLocationUpdate = evt => {
		this.setState({address_location: evt.target.value});
	}

	handleFormSubmit = (evt) => {
    	evt.preventDefault();
    	this.props.onFormSubmit({ ...this.state });
  	};


	render(){
		return(
			<form onSubmit={this.handleFormSubmit}>
				<label className="form-control-label" value={this.state.user}>{this.state.user}</label>
				<div className="form-row justify-content-center">
						<div className="form-group col-md-2">
			 				<label className="form-control-label">Tipo de Documento</label>
			 				<select className="form-control" value={this.state.document_type} name="tipo_doc" id="tipo_doc" onChange={this.handleDocumentTypeUpdate.bind(this)}>
			 		 				<option value="nn">Seleccione... </option>
			 		 				<option value="C.C">CC</option>
			 		 				<option value="T.I">TI</option>
			 		 				<option value="Passport">CE</option>
			 				</select>
			 			</div>

			 			<div className="form-group col-md-4">
			 				<label className="form-control-label">Documento</label>
			 				<input 
			 					className="form-control" 
			 					type="text"
			 					name="documento"
			 					id="documento"
			 					value={this.state.document}
			 					onChange={this.handleDocumentUpdate}
			 				/>
			 			</div>

			 			
			 			<div className="form-group col-md-4">
			 					<label className="form-control-label">Nombre</label>
			 					<input 
			 						className="form-control" 
			 						type="text"
			 						name="nombre"
			 						id="nombre"
			 						value={this.state.first_name}
			 						onChange={this.handleFirstNameUpdate}
			 					/>
			 			</div>
			 	</div>

			 			
			 	<div className="form-row justify-content-center">
			 			<div className="form-group col-md-4">
			 				<label className="form-control-label">Apellidos</label>
			 				<input 
			 					className="form-control" 
			 					type="text"
			 					name="apellido"
			 					id="apellido"
			 					value={this.state.last_name}
			 					onChange={this.handleLastNameUpdate}
			 				/>
			 			</div>
			 	
			 		<div className="form-group col-md-2">
			 			<label className="form-control-label">Género</label>
			 			<select className="form-control" value={this.state.genre} name="genero" id="genero" onChange={this.handleGenreUpdate.bind(this)}>
			 		 		<option value="nn">Seleccione...</option>
			 		 		<option value="M">Masculino</option>
			 		 		<option value="F">Femenino</option>
			 			</select>
			 		</div>


			 		<div className="form-group col-md-2">
			 		<label className="form-control-label">Número de celular</label>
			 			<input 
			 				className="form-control" 
			 				type="text"
			 				name="celular"
			 				id="celular"
			 				value={this.state.phone_num}
			 				onChange={this.handlePhoneNumUpdate}
			 			/>
			 	</div>

			 	<div className="form-group col-md-2">
			 		<label className="form-control-label">Fecha de nacimiento</label>
			 		<input 
			 			className="form-control" 
			 			type="date"
			 			name="fecha_nac"
			 			id="fecha_nac"
			 			value={this.state.date_of_birth}
			 			onChange={this.handleDateofBirthUpdate}
			 		/>
			 	</div>

			 	</div>

			 	
			 	<div className="form-row justify-content-center">
			 	<div className="form-group col-md-4">
			 		<label className="form-control-label">Correo Electrónico</label>
			 		<input 
			 			className="form-control" 
			 			type="text"
			 			name="correo"
			 			id="correo"
			 			value={this.state.email_address}
			 			onChange={this.handleEmailAddressUpdate}
			 		/>
			 	</div>

			 	<div className="form-group col-md-6">
			 		<label className="form-control-label">Dirección de residencia</label>
			 		<input 
			 			className="form-control" 
			 			type="text"
			 			name="direccion"
			 			id="direccion"
			 			value={this.address_location}
			 			onChange={this.handleAddressLocationUpdate}
			 		/>
			 	</div>
			    </div>

			 	<div className="container mt-2" align="center">
			 		<button className="btn btn-primary" type="submit">Registrarse</button>
			 	</div>

			</form>
		);
	}
}

export default Signup;