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
    restaurant_name:"",
    dir_ip:"192.168.43.52",
  };

   componentDidMount(){
       fetch(`http://${this.state.dir_ip}:8000/restaurants/api/admin/1/restaurants`)
      .then((response) => response.json())
      .then((data) => {
      this.setState({ restaurants: data });
      });
  }


 handleRestaurant(event){
    var id = "";
   
    for (var i = 0; i < this.state.restaurants.length; i++) {
      if(this.state.restaurants[i].name === event.target.value){
        id = this.state.restaurants[i].id;
      }
    }
    this.setState({restaurant: id});
    this.setState({restaurant_name: event.target.value});
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
            <select className="form-control" value={this.state.restaurant_name} name="restaurant" id="restaurant" onChange={this.handleRestaurant.bind(this)}>
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
