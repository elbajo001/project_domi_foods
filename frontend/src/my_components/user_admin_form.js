import React,{Component} from 'react';

class AdminForm extends Component{
	state = {
		id_user_restaurant: this.props.document || ""
	};


	handleFormSubmit = (evt) => {
    	evt.preventDefault();
    	this.props.onFormSubmit({ ...this.state });
  	};


  	render(){
  		return(
  			<form onSubmit={this.handleFormSubmit}>
  			    <label className="form-control-label"> Se va a registrar el administrador: </label>
  				<label className="form-control-label">{this.state.id_user_restaurant} </label>
  				<div className="container mt-2" align="center">
			 		<button className="btn btn-primary" type="submit">Finalizar</button>
			 	</div>
  			</form>

  		);
  	}
}

export default AdminForm;