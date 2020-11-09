import React,{Component} from 'react';
import OrderList from './my_components/order_list';

class Orders extends Component{

  /*Componente que despliega la lista de pedidos realizados a un restaurante determinado.*/

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  /*Parámetros:
   *lista de pedidos
   *lista de restaurantes para discriminar los pedidos por el id del restaurante escogido.
   *dirección ip del host que establece conexión con el servidor.
  */
	state={
		orders:[],
		restaurants:[],
		restaurant_id:"",
        restaurant_name:"nn",
		dir_ip:"192.168.1.151"
	};


  /*permite traer la lista de restaurantes que son gerenciados por el administrador que
   *ha iniciado sesión, el id del administrador se obtiene de la ruta de acceso a este componente
   *desde el navegador.
  */ 
	componentDidMount(){
		const {id} = this.props.match.params;
     	fetch(`http://${this.state.dir_ip}:8000/restaurants/api/admin/${id}/restaurants`)
      	.then(response => response.json())
      	.then(data => {
        this.setState({restaurants: data});
      	});
	}


	//permite mostrar los pedidos  de un restaurante dado, luego de un evento de cambio
  //que ocurre en el momento en que escoge un restaurante.
 	handleChange(event){
    //alert(event.target.value);
    var id = "";

    for (var i = 0; i < this.state.restaurants.length; i++) {
      if(this.state.restaurants[i].name === event.target.value){
        id = this.state.restaurants[i].id
      }
    }
    
     this.setState({restaurant_id:event.target.value});

      fetch(`http://${this.state.dir_ip}:8000/shopping_cars/api/order_list/${id}`)
      .then((response) => response.json())
      .then((data) => {
         this.setState({orders: data});
    });
    
  }

  handleClick(event){
  alert(this.state.restaurant_id);
  event.preventDefault();
}


  //Función que permite renderizar el contenido de este componente.
	render(){
		return(
			
			<div id="content" className="p-4 p-md-5 pt-5">
			 <main>
                <div className="container-fluid">
					<h2 className="font-weight-bold text-danger mt-4 bg-white" align="center">Pedidos</h2>
					
						<main className="d-flex justify-content-center my-4">
            			<div className="jumbotron bg-light col-lg-12">
            				<OrderList
              					orders={this.state.orders}
            				/>
            			</div>
            		</main>
            		 <p  className="text-dark" align="center"><i>Escoja alguno de los restaurantes para ver sus productos</i></p>
              		<div className="footer">
              			<nav aria-label="Page navigation">
            			<ul className="pagination justify-content-center">
               				{this.state.restaurants.map((restaurant)=>(
                			<li key={restaurant.id} className="page-item"><button className="page-link text-danger font-weight-bold" value={restaurant.name} onClick={this.handleChange}>{restaurant.name}</button></li>
              				))}
            			</ul>
           				</nav>
           			</div>
			    </div>
			</main>
		    </div>
		);
	}
}

export default Orders;