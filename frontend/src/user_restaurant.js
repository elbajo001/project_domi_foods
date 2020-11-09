import React,{Component} from 'react';
import Signup from './my_components/signup_form';


class Step2 extends Component{
	/*
	 *Componente que despliega la funcionalidad de registro, correspondiente al segundo paso,
	 *donde el usuario diligencia todos sus datos personales para posteriormente ser registrado
	 *como administrador en el último paso.
	*/

	/*Parámetros del componente: datos personales del usuario y dirección del host
	 *que establece conexión con el servidor*/
	state = {
		user_restaurant:{
			user: "",
			document_type: "",
    		document: "",
   			first_name: "",
   			last_name: "",
   			genre: "",
    		phone_num: "",
   			date_of_birth: "",
    	  	email_address: "",
    		address_location: ""
		},

		dir_ip:"192.168.88.9",
	};

	//función que dirige los datos del formulario correspondientes al usuario que se está 
	//registrando.
	handleFormRestaurant = (user_restaurant) =>{
     	this.createUserRestaurant(user_restaurant);
    };

    //función que permite la creación de un usuario de la plataforma domifoods web.
    createUserRestaurant(user_restaurant){
    	const flag = false;
		//se procede a registrar como usuario restaurante
    	fetch(
    		`http://${this.state.dir_ip}:8000/accounts/api/user_restaurant_register/`, {
      		 method: "POST",
      		 headers: {
        	 "Content-Type": "application/json",
      		},
      		body: JSON.stringify(user_restaurant),
    	}).then(response => response.json())
    	  .then((data) => {
		  		this.setState({user_restaurant: data});
		  		if(this.state.user_restaurant.document === user_restaurant.document){
		  			this.props.history.push(`/user_admin_registry/${this.state.user_restaurant.document}`);
		    	}
		    });
	}


	
	//función que renderiza el contenido de este componente.
	render(){
		    //se obtiene el id del usuario a traves de la ruta de acceso a este componente en el navegador.
			const {id} = this.props.match.params;
			return(
			<div className="jumbotron justify-content-center alert-info" align="center">
				<div className="jumbotron alert-primary" align="center">
					<h2 className="text-primary font-weight-bold">Registrate en DomiFoods!</h2>
					<hr/>
					<Signup
						user ={id}
						document_type = {this.state.user_restaurant.document_type}
    					document = {this.state.user_restaurant.document}
   						first_name = {this.state.user_restaurant.first_name}
   						last_name = {this.state.user_restaurant.last_name}
   						genre = {this.state.user_restaurant.genre}
    					phone_num = {this.state.user_restaurant.phone_num}
   						date_of_birth= {this.state.user_restaurant.date_of_birth}
    	    			email_address= {this.state.user_restaurant.email_address}
    					address_location = {this.state.user_restaurant.address_location}
    					onFormSubmit={this.handleFormRestaurant}
					/>

					<div className="bg-transparent mt-2">
					    <p>
						{this.state.user_restaurant.document_type}
						<br/>
						{this.state.user_restaurant.document}
						<br/>
						{this.state.user_restaurant.first_name}
						<br/>
						{this.state.user_restaurant.last_name}
						<br/>
						{this.state.user_restaurant.genre}
						<br/>
						{this.state.user_restaurant.phone_num}
						<br/>
						{this.state.user_restaurant.date_of_birth}
						<br/>
						{this.state.user_restaurant.email_address}
						<br/>
						{this.state.user_restaurant.address_location}
						</p>
					</div>

				</div>
			</div>		
			);		
		}

	}

export default Step2;
