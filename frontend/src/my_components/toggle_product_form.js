import React, { Component } from "react";
import ProductForm from "./product_form";

class ToggleableProductForm extends Component {
   //Componente que permite la creación de más productos.
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
  handleFormSubmit = (product) => {
    this.leaveCreateMode();
    this.props.onProductCreate(product);
  };
  render() {
    if (this.state.inCreateMode) {
      return (
        <div className="mb-3 p-4 col-auto" style={{ boxShadow: "0 0 10px #ccc" }}>
          <ProductForm
            onFormSubmit={this.handleFormSubmit}
            onCancelClick={this.handleCancleClick}
          ></ProductForm>
        </div>
      );
    }
    return (
      <button onClick={this.handleCreateClick} className="btn btn-danger btn-lg">
        <i className="fas fa-plus"></i>
      </button>
    );
  }
}

export default ToggleableProductForm;