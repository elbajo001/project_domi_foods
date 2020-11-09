import React, { Component } from "react";


class ProductForm extends Component {
    /*Componente que despliega el formulario del producto, para la creación y actualización
    *del mismo.*/

    state = {
      id: this.props.id || "",
      name: this.props.name || "",
      price: this.props.price || "",
      description: this.props.description || "",
      image: this.props.image || "",
      category: this.props.category || "",
      //state_delete: this.props.state_delete || "",
      categories:[],
      restaurants:[],
      restaurant:"",
      category_id:"",
      category_name:"",
      restaurant_name:"",
      dir_ip:"192.168.88.9",
    };

  
componentDidMount(){

      fetch(`http://${this.state.dir_ip}:8000/restaurants/api/admin/1/restaurants`)
      .then((response) => response.json())
      .then((data) => {
      this.setState({ restaurants: data });
      });
  }

  handleRestaurant(event){
     //this.setState({restaurant: event.target.value});
      var id = "";
      
      for (var i = 0; i < this.state.restaurants.length; i++) {
          if(this.state.restaurants[i].name === event.target.value){
              id = this.state.restaurants[i].id;
          }
      }
        //alert(id);
        this.setState({restaurant: id});
        this.setState({restaurant_name: event.target.value});

        fetch(`http://${this.state.dir_ip}:8000/restaurants/api/restaurants/${id}/categories/`)
        .then((response) => response.json())
        .then((data) => {
          this.setState({ categories: data });
      });
  }

  handleCategory(event){
    var id="";
    
    for (var i = 0; i < this.state.categories.length; i++) {
          if(this.state.categories[i].name === event.target.value){
              id = this.state.categories[i].id;
          }
    }
    //alert(id);
    this.setState({category:id});
    //this.setState({category_id: event.target.value });
    this.setState({category_name: event.target.value});
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

  handleImageUpdate = (evt) => {
      this.setState({image: evt.target.files[0]});
  }

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
            <select className="form-control" value={this.state.restaurant_name} name="restaurant" id="restaurant" onChange={this.handleRestaurant.bind(this)}>
              <option>Seleccione...</option>
              {this.state.restaurants.map((restaurant)=>(
                <option>{restaurant.name}</option>
              ))}
            </select>
        </div>

        <div className="form-group">
          <label>Category</label>
          <select value={this.state.category_name} className="form-control" name="category_sel" id="category_sel" onChange={this.handleCategory.bind(this)}>
             <option>Seleccione</option>
              {this.state.categories.map((category)=>(
                <option>{category.name}</option>
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

           <div className="form-row">
            <label className="form-control-label">Image</label>
            <input
              type="file"
              onChange={this.handleImageUpdate}
              className="form-control"
            />
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
