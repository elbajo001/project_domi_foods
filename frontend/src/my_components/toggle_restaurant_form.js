import React,{Component} from 'react';
//import ReactDOM from "react-dom";
import RestaurantForm from "./restaurant_form";

class ToggleableRestaurantForm extends Component {
   //Componente que permite la creación de más restaurantes.
  state = {
    inCreateMode: false
  };
  handleCreateClick = () => {
    this.setState({ inCreateMode: true });
  };
  leaveCreateMode = () => {
    this.setState({ inCreateMode: false });
  };
  handleCancelClick = () => {
    this.leaveCreateMode();
  };
  handleFormSubmit = (restaurant) => {
    this.leaveCreateMode();
    this.props.onRestaurantCreate(restaurant);
  };
  render() {
    if (this.state.inCreateMode) {
      return (
        <div className="mb-3 p-4 col-7 bg-light" style={{ boxShadow: "0 0 10px #ccc" }}>
          <RestaurantForm
            onFormSubmit={this.handleFormSubmit}
            onCancelClick={this.handleCancelClick}
          />
        </div>
      );
    }
    return (
      <button onClick={this.handleCreateClick} className="btn btn-danger">
        <i className="fas fa-plus"></i>
      </button>
    );
  }
}

export default ToggleableRestaurantForm;