import React,{Component} from 'react';
import ToggleableRestaurantForm from "./my_components/toggle_restaurant_form";
import RestaurantList from "./my_components/restaurant_list";

class RestaurantDashboard extends Component {
  


  state = {
    admin: "",
    restaurants: [],
    dir_ip:"192.168.43.52",
  };

  //crud de restaurantes


  //listar restaurantes de un administrador dado
  componentDidMount() {
    const {id} = this.props.match.params;
    this.setState({admin: id});
    fetch(`http://${this.state.dir_ip}:8000/restaurants/api/admin/${id}/restaurants`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ restaurants: data });
      });
  }

  //crear restaurante
  createNewRestaurant = (restaurant) => {
    alert(this.state.admin);
    restaurant.id_admin = this.state.admin;
    alert(restaurant.id_admin);
    fetch(`http://${this.state.dir_ip}:8000/restaurants/api/restaurants/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(restaurant),
    }).then(response => response.json())
      .then(restaurant => {
        this.setState({restaurants: this.state.restaurants.concat([restaurant])});
      });
  }


 //actualizar restaurante
  updateRestaurant = (newRestaurant) => {
    fetch(`http://${this.state.dir_ip}:8000/restaurants/api/restaurants/${newRestaurant.id}/`,{
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRestaurant),
      }).then(response => response.json())
      .then(newRestaurant => {
        const newRestaurants = this.state.restaurants.map(restaurant => {
          if (restaurant.id === newRestaurant.id) {
            return Object.assign({}, newRestaurant)
          } else {
            return restaurant;
          }
        });
        this.setState({restaurants: newRestaurants});
      });
  }


  //eliminar restaurante
  deleteRestaurant = (restaurantId) => {
    fetch(
      `http://${this.state.dir_ip}:8000/restaurants/api/restaurants/${restaurantId}/`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
      this.setState({
        restaurants: this.state.restaurants.filter(
           restaurant => restaurant.id !== restaurantId)})
    });
  }

  //renderizar para mostrar el contenido
  render() {
    return (
      <div id="content" className="p-4 p-md-5 pt-1">
        <main>
          <div className="jumbotron-fluid bg-faded">
            <h2 className="text-danger mt-4 bg-light" align="center"><strong>Restaurantes</strong></h2>
             <main className="d-flex  my-4">
             <div className="container">
            <RestaurantList
              restaurants={this.state.restaurants}
              onDeleteClick={this.deleteRestaurant}
              onUpdateClick={this.updateRestaurant}
            />
            <ToggleableRestaurantForm
              onRestaurantCreate={this.createNewRestaurant}
            />
            </div>
            </main>
          </div>
        </main>
      </div>
    );
  }
}

export default RestaurantDashboard;
