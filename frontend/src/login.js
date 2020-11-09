import React, { Component } from 'react';
import LoginForm from './my_components/login_form';

class Login extends Component {

	/*Aquí lógica del inicio de sesión*/
	state = {
		dir_ip: "192.168.0.18",
		user: {
			username: "",
			password: ""
		},

		result: {
			answer: "",
			document: "",
			expiry: "",
			token: ""
		}
	};

	handleFormSubmit = (user) => {
		this.login_user(user);
	};


	login_user = (user) => {
		fetch(`http://${this.state.dir_ip}:8000/accounts/api/login/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		}).then(response => response.json())
			.then((data) => {
				this.setState({ result: data });
			});
	}

	render() {
		return (
			<div className="jumbotron d-flex mt-5 mb-2 justify-content-center alert-primary">
				<div className="jumbotron alert-danger col-auto mb-2" align="center">
					<img src="https://icon-library.com/images/restaurant-icon-png/restaurant-icon-png-21.jpg" height="100" width="100" align="left" alt="login" />
					<h2 className="text-danger font-weight-bold">Login</h2>
					<hr />
					<LoginForm
						username={this.state.user.username}
						password={this.state.user.password}
						onFormSubmit={this.handleFormSubmit}
					/>

					<div className="alert-warning mt-2">
						<p>
							{this.state.result.answer}<br />
							<strong>{this.state.result.document}</strong><br />
							{this.state.result.expiry}<br />
							{this.state.result.token}<br />

						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;