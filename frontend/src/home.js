import React,{Component} from 'react';

class Home extends Component{
	render(){
		return(
             <div id="content" class="p-4 p-md-5 pt-5">
			 <main>
                    <div class="container-fluid">
                        <h1 class="font-weight-bold text-danger mt-4">Dashboard</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">Área de Mensajes</li>
                        </ol>
                        <div class="row">
                            <div class="col-xl-6">
                                <div class="card mb-4">
                                    <div class="card-header">
                                        <i class="fas fa-chart-area mr-1"></i>
                                        Reporte Mensual de Ventas
                                    </div>
                                    <div class="card-body"><canvas id="myAreaChart" width="100%" height="40"></canvas></div>
                                </div>
                            </div>
                            <div class="col-xl-6">
                                <div class="card mb-4">
                                    <div class="card-header">
                                        <i class="fas fa-chart-bar mr-1"></i>
                                        Reporte Semanal de Ventas
                                    </div>
                                    <div class="card-body"><canvas id="myBarChart" width="100%" height="40"></canvas></div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-header">
                                <i class="fas fa-table mr-1"></i>
                                Platos Publicados
                            </div>
                            <div class="card-body">
                               
                            </div>
                        </div>
                    </div>
                </main>
             </div>
		);
	}
}

export default Home;