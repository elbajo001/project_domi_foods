import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Sidebar extends Component{
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
          <h1><a href="index.html" class="logo">Domifoods!<span>Food Delivery</span></a></h1>
          <ul class="list-unstyled components mb-5">
            <li class="active">
              <Link to ="/"><span class="fa fa-home mr-3"></span> Home</Link>
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
              <a href="#"><span class="fa fa-bar-chart mr-3"></span>Reportes</a>
            </li>
          </ul>
        </div>
      </nav>

		);
	}
}

export default Sidebar;