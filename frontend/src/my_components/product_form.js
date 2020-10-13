import React, { Component } from "react";


class ProductForm extends Component {

    state = {
      name: this.props.name || "",
      price: this.props.price || "",
      description: this.props.description || "",
      category: this.props.category || "",
      categories:[]
    };



  componentDidMount(){
      fetch('http://localhost:8000/restaurants/api/restaurants/4/categories')
        .then((response) => response.json())
        .then((data) => {
          this.setState({ categories: data });
      });
  }

  handleChange(event){
    this.setState({category:event.target.value});
    //this.props.category=event.target.value;
   }

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
    const buttonText = this.props.id ? "Update Product" : "Create Product";
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
           <select className="form-control" name="category_sel" id="category_sel" onChange={this.handleChange.bind(this)}>
              {this.state.categories.map((category)=>(
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
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
          <button type="submit" className="btn btn-md btn-danger">
            {buttonText}
          </button>
          <button
            type="button"
            className="btn btn-md btn-primary"
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
