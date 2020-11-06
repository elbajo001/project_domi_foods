import React,{Component} from 'react';
import Signup from './my_components/signup_form';


class Step2 extends Component{
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

		dir_ip:"192.168.1.151",
	};

	
	handleFormRestaurant = (user_restaurant) =>{
     	this.createUserRestaurant(user_restaurant);
    };

    createUserRestaurant(user_restaurant){
		//se procede a registrar como usuario restaurante
    	fetch(
    		`http://${this.state.dir_ip}:8000/accounts/api/user_restaurant_register/`, {
      		 method: "POST",
      		 headers: {
        	 "Content-Type": "application/json",
      		},
      		body: JSON.stringify(user_restaurant),
    	}).then(response1 => response1.json())
    	  .then((data) => {
		  		this.setState({user_restaurant: data});
		  		this.props.history.push(`/user_admin_registry/${this.state.user_restaurant.document}`);
		    });
	}


	

	render(){
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
				</div>
			</div>		
			);		
		}

	}

export default Step2;