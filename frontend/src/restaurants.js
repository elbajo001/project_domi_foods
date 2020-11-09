import React, { Component } from 'react';
import ToggleableRestaurantForm from "./my_components/toggle_restaurant_form";
import RestaurantList from "./my_components/restaurant_list";

class RestaurantDashboard extends Component {

  /*Componente que se encarga de la visualización general de información de los restaurantes
  gerenciados por un administrador determinado*/

  //parámetros del componente: administrador, lista de restaurantes y la dirección ip del host
  //donde se va a realizar la conexión con el servidor. 
  state = {
    admin: "",
    restaurants: [],
    dir_ip: "192.168.0.18",
  };

  //crud de restaurantes


  //permite listar restaurantes de un administrador dado
  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({ admin: id });
    fetch(`http://${this.state.dir_ip}:8000/restaurants/api/admin/${id}/restaurants`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ restaurants: data });
      });
  }

  //función que permite crear un restaurante
  createNewRestaurant = (restaurant) => {
    alert(this.state.admin);
    restaurant.id_admin = this.state.admin;
    alert(restaurant.id_admin);
    const uploadData = new FormData();
    uploadData.append('id', restaurant.id);
    uploadData.append('id_admin', restaurant.id_admin);
    uploadData.append('nit', restaurant.nit);
    uploadData.append('name', restaurant.name);
    uploadData.append('address_location', restaurant.address_location);
    uploadData.append('phone_num', restaurant.phone_num);
    uploadData.append('web_page', restaurant.web_page);
    uploadData.append('hours_start', restaurant.hours_start);
    uploadData.append('hours_end', restaurant.hours_end);
    uploadData.append('image', restaurant.image);

    fetch(`http://${this.state.dir_ip}:8000/restaurants/api/restaurants/`, {
      method: "POST",
      /*headers: {
        "Content-Type": "application/json",
      },*/
      body: uploadData, //JSON.stringify(restaurant),
    }).then(response => response.json())
      .then(restaurant => {
        this.setState({ restaurants: this.state.restaurants.concat([restaurant]) });
      });
  }


  //función que permite actualizar los datos del restaurante
  updateRestaurant = (newRestaurant) => {
    const uploadData = new FormData();
    uploadData.append('id', newRestaurant.id);
    uploadData.append('id_admin', newRestaurant.id_admin);
    uploadData.append('nit', newRestaurant.nit);
    uploadData.append('name', newRestaurant.name);
    uploadData.append('address_location', newRestaurant.address_location);
    uploadData.append('phone_num', newRestaurant.phone_num);
    uploadData.append('web_page', newRestaurant.web_page);
    uploadData.append('hours_start', newRestaurant.hours_start);
    uploadData.append('hours_end', newRestaurant.hours_end);
    uploadData.append('image', newRestaurant.image);



    fetch(`http://${this.state.dir_ip}:8000/restaurants/api/restaurants/${newRestaurant.id}/`, {
      method: "PUT",
      /*headers: {
        "Content-Type": "application/json",
      },*/
      body: uploadData,//body: JSON.stringify(newRestaurant),
    }).then(response => response.json())
      .then(newRestaurant => {
        const newRestaurants = this.state.restaurants.map(restaurant => {
          if (restaurant.id === newRestaurant.id) {
            return Object.assign({}, newRestaurant)
          } else {
            return restaurant;
          }
        });
        this.setState({ restaurants: newRestaurants });
      });
  }


  //esta función permite eliminar un restaurante discriminandolo por el identificador: id.
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
            restaurant => restaurant.id !== restaurantId)
        })
      });
  }

  //renderizar para mostrar el contenido
  render() {
    return (
      <div id="content" className="p-4 p-md-5 pt-1">
        <main>
          <div className="jumbotron-fluid bg-light">
            <h2 className="text-danger mt-4 bg-light" align="center"><strong>Restaurantes</strong></h2>
            <main className="d-flex  my-4">
              <div className="container mb-2">
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
