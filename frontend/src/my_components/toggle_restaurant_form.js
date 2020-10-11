import React,{Component} from 'react';
import ReactDOM from "react-dom";
import RestaurantForm from "./restaurant_form";

class ToggleableRestaurantForm extends Component {
  state = {
    inCreateMode: false
  };
  handleCreateClick = () => {
    this.setState({ inCreateMode: true });
  };
  leaveCreateMode = () => {
    this.setState({ inCreateMode: false });
  };
  handleCancleClick = () => {
    this.leaveCreateMode();
  };
  handleFormSubmit = (restaurant) => {
    this.leaveCreateMode();
    this.props.onRestaurantCreate(restaurant);
  };
  render() {
    if (this.state.inCreateMode) {
      return (
        <div className="mb-3 p-4" style={{ boxShadow: "0 0 10px #ccc" }}>
          <RestaurantForm
            onFormSubmit={this.handleFormSubmit}
            onCancelClick={this.handleCancleClick}
          />
        </div>
      );
    }
    return (
      <button onClick={this.handleCreateClick} className="btn btn-secondary">
        <i className="fas fa-plus"></i>
      </button>
    );
  }
}

export default ToggleableRestaurantForm;