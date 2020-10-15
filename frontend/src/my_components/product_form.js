import React, { Component } from "react";


class ProductForm extends Component {

    state = {
      name: this.props.name || "",
      price: this.props.price || "",
      description: this.props.description || "",
      category: this.props.category || "",
      categories:[],
      restaurants:[],
      restaurant_id:"",
    };

  handleRestaurant(event){
        this.setState({restaurant_id: event.target.value});
         fetch(`http://192.168.0.111:8000/restaurants/api/restaurants/${this.state.restaurant_id}/categories/`)
        .then((response) => response.json())
        .then((data) => {
          this.setState({ categories: data });
      });
  }

  componentDidMount(){

       fetch("http://192.168.0.111:8000/restaurants/api/admin/1/restaurants")
      .then((response) => response.json())
      .then((data) => {
      this.setState({ restaurants: data });
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
          <label>Restaurante:</label>
            <select className="form-control" value="Seleccione" name="restaurant" id="restaurant" onChange={this.handleRestaurant.bind(this)}>
              <option>Seleccione...</option>
              {this.state.restaurants.map((restaurant)=>(
                <option key={restaurant.id} value={restaurant.id}>{restaurant.name}</option>
              ))}
            </select>
        </div>

        <div className="form-group">
          <label>Category</label>
           <select value="Seleccione..." className="form-control" name="category_sel" id="category_sel" onChange={this.handleChange.bind(this)}>
             <option>Seleccione</option>
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
