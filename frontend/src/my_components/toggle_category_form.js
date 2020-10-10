import React, { Component } from "react";
import CategoryForm from "./category_form";

class ToggleableCategoryForm extends React.Component {
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
  handleFormSubmit = (category) => {
    this.leaveCreateMode();
    this.props.onCategoryCreate(category);
  };
  render() {
    if (this.state.inCreateMode) {
      return (
        <div className="mb-3 p-4" style={{ boxShadow: "0 0 10px #ccc" }}>
          <CategoryForm
            onFormSubmit={this.handleFormSubmit}
            onCancelClick={this.handleCancleClick}
          ></CategoryForm>
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

export default ToggleableCategoryForm;