import React,{Component} from 'react';


class Reports extends Component{
	/*Componente que despliega la funcionalidad de reportes estadísticos 
	 *semanales y mensuales de un restaurante determinado.*/

	//función que renderiza el contenido de este componente.
	render(){
		return(
			<div id="content" className="p-4 p-md-5 pt-5">
			 <main>
                <div className="container-fluid">
					<h2 className="font-weight-bold text-danger mt-4 bg-white" align="center">Reportes</h2>
					<div className="alert alert-warning" role="alert">
  						<h4 className="alert-heading">En mantenimiento!</h4>
 						 <p>Estas this funcionalidades aún no se encuentran disponibles, gracias por su comprensión</p>
 						 <hr/>
  						<p className="mb-0">Equipo de desarrollo DomiFoods!</p>
					</div>
			    </div>
			</main>
		    </div>
		);
	}
}

export default Reports;