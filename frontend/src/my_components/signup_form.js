import React,{Component} from 'react';


class Signup extends Component{
	render(){
		return(
			<form>

				<div className="form-row justify-content-center">
						<div className="form-group col-md-2">
			 				<label className="form-control-label">Tipo de Documento</label>
			 				<select className="form-control" name="tipo_doc" id="tipo_doc">
			 		 				<option>CC</option>
			 		 				<option>TI</option>
			 		 				<option>CE</option>
			 				</select>
			 			</div>

			 			<div className="form-group col-md-4">
			 				<label className="form-control-label">Documento</label>
			 				<input 
			 					className="form-control" 
			 					type="text"
			 					name="documento"
			 					id="documento"
			 				/>
			 			</div>

			 			
			 			<div className="form-group col-md-4">
			 					<label className="form-control-label">Nombre</label>
			 					<input 
			 						className="form-control" 
			 						type="text"
			 						name="nombre"
			 						id="nombre"
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
			 				/>
			 			</div>
			 	
			 		<div className="form-group col-md-2">
			 			<label className="form-control-label">Género</label>
			 			<select className="form-control" name="genero" id="genero">
			 		 		<option>Masculino</option>
			 		 		<option>Femenino</option>
			 			</select>
			 		</div>


			 		<div className="form-group col-md-2">
			 		<label className="form-control-label">Número de celular</label>
			 			<input 
			 				className="form-control" 
			 				type="text"
			 				name="celular"
			 				id="celular"
			 			/>
			 	</div>

			 	<div className="form-group col-md-2">
			 		<label className="form-control-label">Fecha de nacimiento</label>
			 		<input 
			 			className="form-control" 
			 			type="date"
			 			name="fecha_nac"
			 			id="fecha_nac"
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
			 		/>
			 	</div>

			 	<div className="form-group col-md-6">
			 		<label className="form-control-label">Dirección de residencia</label>
			 		<input 
			 			className="form-control" 
			 			type="text"
			 			name="direccion"
			 			id="direccion"
			 		/>
			 	</div>
			 </div>

			 	<div className="container mt-2" align="center">
			 		<button className="btn btn-primary">Registrarse</button>
			 	</div>

			</form>
		);
	}
}

export default Signup;