import React,{Component} from 'react';
import OrderList from './my_components/order_list';

class Orders extends Component{

	state={
		orders:[],
		dir_ip:"192.168.1.151"
	};


	componentDidMount(){
		
	}



	render(){
		return(
			
			<div id="content" className="p-4 p-md-5 pt-5">
			 <main>
                <div className="container-fluid">
					<h2 className="font-weight-bold text-danger mt-4 bg-white" align="center">Pedidos</h2>
					
						<main className="d-flex justify-content-center my-4">
            			<div className="jumbotron bg-light">
            				<OrderList
              					orders={this.state.orders}
            				/>
            			</div>
            		</main>



			    </div>
			</main>
		    </div>
		);
	}
}

export default Orders;