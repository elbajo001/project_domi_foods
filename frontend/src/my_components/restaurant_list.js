import React,{Component} from 'react';
//import ReactDOM from "react-dom";
import EditableRestaurant from "./editable_restaurant";

class RestaurantList extends Component {
  render() {
    const restaurants = this.props.restaurants.map((restaurant) => (
      <EditableRestaurant
        key={restaurant.id}
        id={restaurant.id}
        nit={restaurant.nit}
        name={restaurant.name}
        address_location={restaurant.address_location}
        phone_num={restaurant.phone_num}
        web_page={restaurant.web_page}
        hours={restaurant.hours}
        id_admin={restaurant.id_admin}
        onDeleteClick={this.props.onDeleteClick}
        onUpdateClick={this.props.onUpdateClick}
      ></EditableRestaurant>
    ));

    if(Object.entries(restaurants).length===0){
      return <div className="card-deck"><h3>No hay restaurantes para mostrar.</h3></div>
    }
    return <div className="card-deck">{restaurants}</div>;
  }
}

export default RestaurantList;