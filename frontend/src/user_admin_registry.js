import React,{Component} from 'react';
import AdminForm from './my_components/user_admin_form';

class Registry_Admin extends Component{
  /*
    *Componente que despliega la funcionalidad del registro del usuario a la plataforma
    *domifoods web, correspondiente al último paso, es decir, el registro como auténtico
    *administrador de restaurantes.
  */

  /*
    *los parámetros de entrada son: el documento de identficación del usuario previamente registrado
    *en el paso anterior, es decir, como usuario de la plataforma domifoods web.
    *además de la dirección ip del host que establece conexión con el servidor. 
  */

	state = {
		user_admin:{
			id_user_restaurant:""
		},

		dir_ip:"192.168.1.151",
	};


  //función que permite la creación de un usuario administrador de restaurantes.
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

  //función que direcciona los datos del administrador, en este caso el documento
  //de identificación para que éste pueda ser registrado.
  handleFormAdmin = (user_admin) => {
      this.createUserAdmin(user_admin);

  }

  //función que renderiza el contenido de este componente.
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
