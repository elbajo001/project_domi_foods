import React,{Component} from 'react';
//import ReactDOM from "react-dom";
import ToggleableRestaurantForm from "./my_components/toggle_restaurant_form";
import RestaurantList from "./my_components/restaurant_list";
import Restaurant from "./my_components/restaurant";

class RestaurantDashboard extends Component {
  state = {
    restaurants: []
  };

  //building crud

  componentDidMount() {
    fetch("http://localhost:8000/restaurants/api/admin/1/restaurants")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ restaurants: data });
      });
  }

  createNewRestaurant = (restaurant) => {
    fetch(
    	'http://localhost:8000/restaurants/api/restaurants/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(restaurant)
    })
      .then((response) => response.json())
      .then((restaurant) => {
        this.setState({
          restaurants: this.state.restaurants.concat([restaurant])
        });
      });
  };

  updateRestaurant = (newRestaurant) => {
    fetch(
      `http://localhost:8000/restaurants/api/restaurants/${newRestaurant.id}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newRestaurant)
      }
    )
      .then((response) => response.json())
      .then((newRestaurant) => {
        const newRestaurants = this.state.restaurants.map((restaurant) => {
          if (restaurant.id === newRestaurant.id) {
            return Object.assign({}, newRestaurant);
          } else {
            return Restaurant;
          }
        });
        this.setState({ restaurants: newRestaurants });
      });
  };

  deleteRestaurant = (restaurantId) => {
    fetch(
      `http://localhost:8000/restaurants/api/restaurants/${restaurantId}/`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(() => {
      this.setState({
        restaurants: this.state.restaurants.filter(
          (restaurant) => restaurant.id !== restaurantId
        )
      });
    });
  };

  render() {
    return (
      <div id="content" class="p-4 p-md-5 pt-5">
        <main>
          <div class="container-fluid">
            <h1 className="text-danger mt-4"><strong>Restaurantes</strong></h1>
             <main className="d-flex justify-content-center my-4">
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
