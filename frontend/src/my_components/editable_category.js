import React, { Component } from 'react';
import Category from './category';
import CategoryForm from './category_form';

class EditableCategory extends Component {
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
  handleUpdate = (category) => {
    this.leaveEditMode();
    category.id = this.props.id;
    this.props.onUpdateClick(category);
  };
  render() {
    const component = () => {
      if (this.state.inEditMode) {
        return (
          <CategoryForm
            id = {this.props.id}
            name={this.props.name}
            description={this.props.description}
            restaurant={this.props.restaurant}
            onCancelClick={this.leaveEditMode}
            onFormSubmit={this.handleUpdate}
          />
        );
      }
      return (
        <Category
            id={this.props.id}
            name={this.props.name}
            description={this.props.description}
            restaurant={this.props.restaurant}
            onEditClick={this.enterEditMode}
            onDeleteClick={this.handleDelete}
        />
      );
    };
    return (
      <div className="mb-3 p-4 col-auto" style={{ boxShadow: "0 0 10px #ccc" }}>
        {component()}
      </div>
    );
  }
}

export default EditableCategory;