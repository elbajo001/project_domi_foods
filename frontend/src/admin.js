import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Sidebar from './my_components/sidebar';
import Home from './home';
import RestaurantDashboard from './restaurants';
import Products from './products';
import Categories from './categories';
import Profile from './profile';
import Reports from './reports';
import Orders from './orders';

class Admin extends Component {
	/*Componente que despliega la información pertenciente al administrador que haya iniciado sesión
	 *Los parámetros de este componente incluyen la información básica del usuario: identificación(documento) y nombre completo
	 *Además de la dirección ip del host donde se establece la conexión con el servidor y el id del administrador.*/
	state = {
		user_restaurant: {
			document: "",
			first_name: "",
			last_name: ""
		},
		dir_ip: "192.168.0.18",

		admin: {
			id: ""
		},
	};

	/*permite traer la información del usuario que ha iniciado sesión a través del documento
	 *de identificación, que es extraído de la ruta de acceso a este componente en el navegador.*/
	componentDidMount() {
		const { id } = this.props.match.params;
		fetch(`http://${this.state.dir_ip}:8000/accounts/api/user_restaurant_detail/${id}`)
			.then((response) => response.json())
			.then((data) => {
				this.setState({ user_restaurant: data });
			});

		fetch(`http://${this.state.dir_ip}:8000/accounts/api/user_admin_detail/${id}`)
			.then((response) => response.json())
			.then((data) => {
				this.setState({ admin: data });
			});


	}

	//función que renderiza el contenido de este componente.
	render() {
		return (
			<div className="container-fluid">
				<Router>
					<Sidebar
						first_name={this.state.user_restaurant.first_name}
						last_name={this.state.user_restaurant.last_name}
						admin_document={this.state.user_restaurant.document}
						id={this.state.admin.id}
					/>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/profile/:id" component={Profile} />
						<Route path="/restaurants/:id" component={RestaurantDashboard} />
						<Route path="/products/:id" component={Products} />
						<Route path="/categories/:id" component={Categories} />
						<Route exact path="/reports" component={Reports} />
						<Route exact path="/orders/:id" component={Orders} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default Admin;