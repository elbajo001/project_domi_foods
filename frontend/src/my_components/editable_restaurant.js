import React,{Component} from 'react';
//import ReactDOM from "react-dom";
import RestaurantForm from "./restaurant_form";
import Restaurant from './restaurant';

class EditableRestaurant extends Component {
  /*Componente que muestra la información del restaurante y permite las funcionalidades de
   *crear, editar y eliminar*/
   
  state = {
    inEditMode: false
  };
  enterEditMode = () => {
    this.setState({ inEditMode: true });
  };
  leaveEditMode = () => {
    this.setState({ inEditMode: false });
  };
  handleDelete = () => {
    this.props.onDeleteClick(this.props.id);
  };
  handleUpdate = (restaurant) => {
    this.leaveEditMode();
    restaurant.id = this.props.id;
    this.props.onUpdateClick(restaurant);
  };

  render() {
    const component = () => {
      if (this.state.inEditMode) {
        return (
          <RestaurantForm
            id={this.props.id}
            nit={this.props.nit}
            name={this.props.name}
            address_location={this.props.address_location}
            phone_num={this.props.phone_num}
            web_page={this.props.web_page}
            hours_start={this.props.hours_start}
            hours_end={this.props.hours_end}
            image={this.props.image}
            id_admin={this.props.id_admin}
            onCancelClick={this.leaveEditMode}
            onFormSubmit={this.handleUpdate}
          />
        );
      }
      return (
        <Restaurant
          nit={this.props.nit}
          name={this.props.name}
          address_location={this.props.address_location}
          phone_num={this.props.phone_num}
          web_page={this.props.web_page}
          hours_start={this.props.hours_start}
          hours_end={this.props.hours_end}
          image={this.props.image}
          id_admin={this.props.id_admin}
          onEditClick={this.enterEditMode}
          onDeleteClick={this.handleDelete}
        />
      );
    };
    return (
      <div className="col-lg-4 col-sm-6 mb-4 bg-light">
        {component()}
      </div>
    );
  }
}

export default EditableRestaurant;