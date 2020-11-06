import React,{Component} from 'react';
import AdminForm from './my_components/user_admin_form';

class Registry_Admin extends Component{
	state = {
		user_admin:{
			id_user_restaurant:""
		},

		dir_ip:"192.168.1.151",
	};

	createUserAdmin(user_admin){
			//finalmente se registra como administrador
    	fetch(
    		`http://${this.state.dir_ip}:8000/accounts/api/user_admin_register/`, {
      		 method: "POST",
      		 headers: {
        	 "Content-Type": "application/json",
      		},
      		body: JSON.stringify(user_admin),
    	}).then(response => response.json())
    	this.props.history.push(`/admin/${this.state.user_admin.id_user_restaurant}`);  
	}

  handleFormAdmin = (user_admin) => {
      this.createUserAdmin(user_admin);

  }


  render(){
    const {id} = this.props.match.params;
    return(
      <div className="jumbotron justify-content-center alert-info" align="center">
        <div className="jumbotron alert-primary" align="center">
          <h2 className="text-primary font-weight-bold">Registrate en DomiFoods!</h2>
          <hr/>
          <AdminForm
            id_user_restaurant = {id}
            onFormSubmit ={this.handleFormAdmin}
          />
          </div>
          </div>
    );
  }

}

export default Registry_Admin;
