import React,{Component} from 'react';
import OrderList from './my_components/order_list';

class Orders extends Component{

	state={
		orders:{
			order1:{
				id:1,
				detail:"hola"
			},
			order2:{
				id:2,
				detail:"chao"
			},
		}
	};



	render(){
		return(
			
			<div id="content" className="p-4 p-md-5 pt-5">
			 <main>
                <div className="container-fluid">
					<h2 className="font-weight-bold text-danger mt-4 bg-white" align="center">Pedidos</h2>
					
						<main className="d-flex justify-content-center my-4">
            			<div className="jumbotron bg-light">
            				<OrderList
              					
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