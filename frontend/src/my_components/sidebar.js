import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Sidebar extends Component{

 	render(){
	  
    const first_name = this.props.first_name;
    const last_name = this.props.last_name;
    //const admin_document = this.props.admin_document;
    const restaurant= `/restaurants/${this.props.id}`;
    const profile=`/profile/${this.props.admin_document}`;
    const products=`/products/${this.props.id}`;
    const categories=`/categories/${this.props.id}`;
    const orders= `/orders/${this.props.id}`;

  	return(
			 <nav className="navbar navbar-expand alert-primary mt-5">
        <div className="p-4">
          <h1 className="logo font-weight-bold text-primary">
                Panel de Administración
          </h1>
           <hr/>
              <img src="https://electronicssoftware.net/wp-content/uploads/user.png" height="70" width="70" alt="user"/>
              <label className="form-control-sm ml-3 font-weight-bold"><h4>{first_name} {last_name}</h4></label>
          <hr/>
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to ="/" className="nav-link active"><span class="fa fa-home mr-3"></span>Home</Link>
            </li>
            <li className="nav-item">
                <Link to ={profile} className="nav-link"><span class="fa fa-user mr-3"></span>Mi perfil</Link>
            </li>
            <li className="nav-item">
              <Link to ={restaurant} className="nav-link"><span class="fa fa-briefcase mr-3"></span>Restaurante</Link>
            </li>
            <li className="nav-item">
              <Link to={products} className="nav-link"><span class="fa fa-cutlery mr-3"></span>Productos</Link>
            </li>
            <li className="nav-item">
              <Link to={categories} className="nav-link"><span class="fa fa-tasks mr-3"></span>Categorías</Link>
            </li>
            <li className="nav-item">
              <Link to="/reports" className="nav-link"><span class="fa fa-bar-chart mr-3"></span>Reportes</Link>
            </li>

            <li className="nav-item">
              <Link to={orders} className="nav-link"><span class="fas fa-calendar-minus mr-3"></span>Pedidos</Link>
            </li>

          </ul>
        </div>
      </nav>

		);
	}
}

export default Sidebar;