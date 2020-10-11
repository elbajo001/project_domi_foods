import React, { Component } from "react";


class CategoryForm extends Component {
  state = {
    id: this.props.id || "",
    name: this.props.name || "",
    description: this.props.description || "",
    restaurant: this.props.restaurant || "",
    restaurants:[]
  };


   componentDidMount(){
       fetch("http://localhost:8000/restaurants/api/restaurants")
      .then((response) => response.json())
      .then((data) => {
      this.setState({ restaurants: data });
      });
   }

    handleChange(event){
    this.setState({value:event.target.value});
    }

  handleFormSubmit = (evt) => {
    evt.preventDefault();
    this.props.onFormSubmit({ ...this.state });
  };
  handleNameUpdate = (evt) => {
    this.setState({ name: evt.target.value });
  };
  handleRestaurantUpdate = (evt) => {
    this.setState({ restaurant: evt.target.value });
  };
  handleDescriptionUpdate = (evt) => {
    this.setState({ description: evt.target.value });
  };
  render() {
    const buttonText = this.props.id ? "Update Book" : "Create Book";
    return (
      <form onSubmit={this.handleFormSubmit}>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Category's name"
            value={this.state.name}
            onChange={this.handleNameUpdate}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            placeholder="Category Description"
            rows="5"
            value={this.state.description}
            onChange={this.handleDescriptionUpdate}
          >
            {this.state.description}
          </textarea>
        </div>

        <div className="form-group">
          <label>Restaurant</label>

          <select className="form-control" name="restaurant_sel" id="restaurant_sel" onChange={this.handleChange}>
              {this.state.restaurants.map((restaurant)=>(
                <option key={restaurant.id} value={restaurant.id}>{restaurant.name}</option>
              ))}
            </select>

        
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

export default CategoryForm;
