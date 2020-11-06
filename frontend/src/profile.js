import React,{Component} from 'react';


class Profile extends Component{
	state={
		admin_detail:{
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

	componentDidMount(){
		const {id} = this.props.match.params;
		fetch(`http://${this.state.dir_ip}:8000/accounts/api/user_restaurant_detail/${id}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ admin_detail: data });
      });
	}



	render(){

		return(
			<div id="content" className="p-4 p-md-5 pt-5">
			 <main>
                <div className="container-fluid">
					<h2 className="font-weight-bold text-danger mt-4 bg-white" align="center">Información del Administrador</h2>
			    	<div className="jumbotron bg-light text-dark">
  						<label>{this.state.admin_detail.document}</label>
  						<br/>
  						<label>{this.state.admin_detail.document_type}</label>
  						<br/>
  						<label>{this.state.admin_detail.first_name}</label>
  						<br/>
  						<label>{this.state.admin_detail.last_name}</label>
  						<br/>
  						<label>{this.state.admin_detail.genre}</label>
  						<br/>
  						<label>{this.state.admin_detail.phone_num}</label>
  						<br/>
  						<label>{this.state.admin_detail.date_of_birth}</label>
  						<br/>
  						<label>{this.state.admin_detail.email_address}</label>
  						<br/>
  						<label>{this.state.admin_detail.address_location}</label>
					</div>
			    </div>
			</main>
		    </div>
		);
	}
}

export default Profile;