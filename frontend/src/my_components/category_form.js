import React, { Component } from "react";


class CategoryForm extends Component {
  //
  state = {
    id: this.props.id || "",
    name: this.props.name || "",
    description: this.props.description || "",
    restaurant: this.props.restaurant || "",
    restaurants:[],
    restaurant_id:"",
  };

   componentDidMount(){

       fetch("http://192.168.1.151:8000/restaurants/api/admin/1/restaurants")
      .then((response) => response.json())
      .then((data) => {
      this.setState({ restaurants: data });
      });
  }


 handleRestaurant(event){
    var id = "";
    this.state.restaurants.map(restaurant => {
          if (restaurant.name === event.target.value) {
            id = restaurant.id;
            this.setState({ restaurant_id : id });
          }
      });
    this.setState({restaurant: id});
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
    this.setState({ name: evt.target.value });
  };
 

  handleDescriptionUpdate = (evt) => {
    this.setState({ description: evt.target.value });
  };

  handleRestaurantUpdate = (evt) => { 
    //restaurant: this.state.restaurant.concat([event.target.value]);
    this.setState({ restaurant: evt.target.value });
  };


  render() {
    const buttonText = this.props.id ? "Update Category" : "Create Category";
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
          <label>Restaurante:</label>
            <select className="form-control" value="Seleccione" name="restaurant" id="restaurant" onChange={this.handleRestaurant.bind(this)}>
              <option>Seleccione...</option>
              {this.state.restaurants.map((restaurant)=>(
                <option>{restaurant.name}</option>
              ))}
            </select>
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

export default CategoryForm;
