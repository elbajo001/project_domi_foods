import React,{Component} from 'react';

class Welcome extends Component{
	render(){
		return(
			<div className="jumbotron mt-5 bg-transparent">
			  <h1 className="text-white">Regístrate en <span className="font-weight-bold text-warning">DomiFoods!</span></h1>
			  <h2 className="text-white">Una plataforma ideal para vender tus platos en línea</h2>
			</div>
	    );
	}
}

export default Welcome;