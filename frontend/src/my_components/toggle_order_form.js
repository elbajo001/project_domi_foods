import React, { Component } from "react";
import Delivery from "./delivery";

class ToggleableOrderForm extends Component {
   //Componente que permite la confirmación de pedidos.
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
  handleFormSubmit = (order) => {
    this.leaveCreateMode();
    this.props.onOrderCreate(order);
  };
  render() {
    if (this.state.inCreateMode) {
      return (
        <div className="mb-3 p-4 col-auto" style={{ boxShadow: "0 0 10px #ccc" }}>
          <Delivery
            //onFormSubmit={this.handleFormSubmit}
            onCancelClick={this.handleCancleClick}
          ></Delivery>
        </div>
      );
    }
  }
}

export default ToggleableOrderForm;