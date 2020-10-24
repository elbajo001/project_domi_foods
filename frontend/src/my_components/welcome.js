import React,{Component} from 'react';

class Welcome extends Component{
	render(){
		return(
			<div className="jumbotron mt-5">
			  <h1 className="text-danger">Regístrate en <span className="font-weight-bold">DomiFoods!</span></h1>
			  <h2>Una plataforma ideal para vender tus platos en línea</h2>
			</div>
	    );
	}
}

export default Welcome;