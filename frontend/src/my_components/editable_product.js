import React, { Component } from 'react';
import Product from './product';
import ProductForm from './product_form';

class EditableProduct extends Component {
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
  handleUpdate = (book) => {
    this.leaveEditMode();
    book.id = this.props.id;
    this.props.onUpdateClick(book);
  };
  render() {
    const component = () => {
      if (this.state.inEditMode) {
        return (
          <ProductForm
            id={this.props.id}
            title={this.props.title}
            author={this.props.author}
            description={this.props.description}
            onCancelClick={this.leaveEditMode}
            onFormSubmit={this.handleUpdate}
          />
        );
      }
      return (
        <Product
          title={this.props.title}
          author={this.props.author}
          description={this.props.description}
          onEditClick={this.enterEditMode}
          onDeleteClick={this.handleDelete}
        />
      );
    };
    return (
      <div className="mb-3 p-4" style={{ boxShadow: "0 0 10px #ccc" }}>
        {component()}
      </div>
    );
  }
}

export default EditableProduct;
