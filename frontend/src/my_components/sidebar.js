import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Sidebar extends Component{
  state={
    admin:{
      "user":"",
      "document_type":"",
      "document":"",
      "first_name":"",
      "last_name":"",
      "phone_num":"",
      "email":"",
      "addres_location":""    
    }
  }

  componentDidMount(){
     fetch("http://localhost:8000/accounts/api/user_restaurant_detail/10467803")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ admin: data });
      });
  };


	render(){
		return(
			 <nav id="sidebar">
        <div class="custom-menu">
          <button type="button" id="sidebarCollapse" class="btn btn-primary">
            <i class="fa fa-bars"></i>
            <span class="sr-only">Toggle Menu</span>
          </button>
        </div>
        <div class="p-4">
          <h1><a href="index.html" class="logo">
              Domifoods!
              <span>
              Food Delivery</span>
              </a>
          </h1>
           <hr/>
              <img src="https://electronicssoftware.net/wp-content/uploads/user.png" height="70" width="70" alt="user"/>
              <label className="form-control-sm ml-3">{this.state.admin.first_name} {this.state.admin.last_name}</label>
          <hr/>
          <ul class="list-unstyled components mb-5">
            <li class="active">
              <Link to ="/"><span class="fa fa-home mr-3"></span>Home</Link>
            </li>
            <li>
                <Link to ="/profile"><span class="fa fa-user mr-3"></span>Mi perfil</Link>
            </li>
            <li>
              <Link to="/restaurants"><span class="fa fa-briefcase mr-3"></span>Restaurante</Link>
            </li>
            <li>
              <Link to="/products"><span class="fa fa-cutlery mr-3"></span>Productos</Link>
            </li>
            <li>
              <Link to="/categories"><span class="fa fa-tasks mr-3"></span>Categorías</Link>
            </li>
            <li>
              <a href="/reports"><span class="fa fa-bar-chart mr-3"></span>Reportes</a>
            </li>
          </ul>
        </div>
      </nav>

		);
	}
}

export default Sidebar;