import React, { Component } from "react";

class Category extends Component {
  
    state={
      restaurant_name:{
          "id": "",
          "nit": "",
          "name": "",
      }
    }


 componentDidMount(){
      fetch(`http://localhost:8000/restaurants/api/restaurants/${this.props.restaurant}/`)
        .then((response) => response.json())
        .then((data) => {
          this.setState({restaurant_name: data });
      });
  }


  render() {
    return (
      <div className="card" /* style="width: 18rem;" */>
        <div className="card-header d-flex justify-content-between bg-danger text-white">
          <span>
            <h5 className="text-white"><strong>{this.props.name}</strong></h5>
          </span>
          <div>
            <span onClick={this.props.onEditClick} className="mr-2">
              <i className="far fa-edit"></i>
            </span>
            <span onClick={this.props.onDeleteClick}>
              <i className="fas fa-trash"></i>
            </span>
          </div>
        </div>
        <hr/>
        <div className="card-body text-dark">
        {this.props.description}</div>
        <div className="card-footer bg-danger text-white">
          <strong><h6>Restaurante:  {this.state.restaurant_name.name}</h6></strong>
        </div>
      </div>
    );
  }
}

export default Category;