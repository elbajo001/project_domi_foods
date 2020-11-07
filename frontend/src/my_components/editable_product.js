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
  handleUpdate = (product) => {
    this.leaveEditMode();
    product.id = this.props.id;
    this.props.onUpdateClick(product);
  };
  render() {
    const component = () => {
      if (this.state.inEditMode) {
        return (
          <ProductForm
            id={this.props.id}
            name={this.props.name}
            price={this.props.price}
            description={this.props.description}
            image={this.props.image}
            category={this.props.category}
            onCancelClick={this.leaveEditMode}
            onFormSubmit={this.handleUpdate}
          />
        );
      }
      return (
        <Product
          name={this.props.name}
          price={this.props.price}
          description={this.props.description}
          image={this.props.image}
          category={this.props.category}
          onEditClick={this.enterEditMode}
          onDeleteClick={this.handleDelete}
        />
      );
    };
    return (
      <div className="col-lg-4 col-sm-6 mb-6" style={{ boxShadow: "0 0 10px #ccc" }}>
        {component()}
      </div>
    );
  }
}

export default EditableProduct;
