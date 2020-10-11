import React, { Component } from "react";


class ProductForm extends Component {
  state = {
    name: this.props.author || "",
    price: this.props.price || "",
    description: this.props.description || "",
    category: this.props.category || ""
  };
  handleFormSubmit = (evt) => {
    evt.preventDefault();
    this.props.onFormSubmit({ ...this.state });
  };
  handleIdUpdate = (evt) => {
    this.setState({id: evt.target.value });
  };
  handleNameUpdate = (evt) => {
    this.setState({name: evt.target.value });
  };

  handlePriceUpdate = (evt) => {
    this.setState({price: evt.target.value });
  };

  handleDescriptionUpdate = (evt) => {
    this.setState({ description: evt.target.value });
  };

  handleCategoryUpdate = (evt) => {
    this.setState({category: evt.target.value });
  };

  render() {
    const buttonText = this.props.id ? "Update Book" : "Create Book";
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter a name"
            value={this.state.name}
            onChange={this.handleNameUpdate}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            type="text"
            placeholder="Product's price"
            value={this.state.price}
            onChange={this.handlePriceUpdate}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            placeholder="Product's category"
            value={this.state.category}
            onChange={this.handleCategoryUpdate}
            className="form-control"
          />
        </div>


        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            placeholder="Product Description"
            rows="5"
            value={this.state.description}
            onChange={this.handleDescriptionUpdate}
          >
            {this.state.description}
          </textarea>
        </div>


        <div className="form-group d-flex justify-content-between">
          <button type="submit" className="btn btn-md btn-primary">
            {buttonText}
          </button>
          <button
            type="button"
            className="btn btn-md btn-secondary"
            onClick={this.props.onCancelClick}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default ProductForm;
