import React,{Component} from 'react';

class Home extends Component{
    /*Componente que despliega cortos resumenes estadísticos de ventas y otros detalles
     * al administrador que ha iniciado sesión*/

    //función que renderiza el contenido de este componente. 
	render(){
		return(
             <div id="content" className="p-4 p-md-5 pt-5">
			 <main>
                    <div className="jumbotron bg-light">
                        <h2 className="font-weight-bold text-danger mt-4 bg-white" align="center">Dashboard</h2>
                        <hr/>
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card mb-4">
                                    <div className="card-header bg-danger text-white">
                                        <i className="fas fa-chart-area mr-1"></i>
                                        Reporte Mensual de Ventas
                                    </div>
                                    <div className="card-body"><canvas id="myAreaChart" width="100%" height="40"></canvas></div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="card mb-4">
                                    <div className="card-header bg-danger text-white">
                                        <i className="fas fa-chart-bar mr-1"></i>
                                        Reporte Semanal de Ventas
                                    </div>
                                    <div className="card-body"><canvas id="myBarChart" width="100%" height="40"></canvas></div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-header bg-danger text-white">
                                <i className="fas fa-table mr-1"></i>
                                Platos Publicados
                            </div>
                            <div className="card-body">
                               
                            </div>
                        </div>
                    </div>
                </main>
             </div>
		);
	}
}

export default Home;