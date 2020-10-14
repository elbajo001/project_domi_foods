import React, { Component } from "react";

class Product extends Component {
  state={
    category_pr:{
      id: this.props.id || "",
      name: this.props.name || "",
      description: this.props.description || "",
    }
  }

  componentDidMount(){
      fetch(`http://192.168.1.151:8000/restaurants/api/categories/${this.props.category}/`)
        .then((response) => response.json())
        .then((data) => {
          this.setState({ category_pr: data });
      });
  }

  render() {
    return (
      <div className="card" /* style="width: 18rem;" */>
        <div className="card-header d-flex justify-content-between bg-danger text-white">
          <span>
            <strong>{this.props.name}</strong>
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
        <div className="card-body text-dark">
         <img className="card-img-top" src="https://higuma.github.io/bootstrap-4-tutorial/img/286x180.svg" alt="product"/>
         <hr/>
        <div>{this.props.description}</div>
        <label>Precio: {this.props.price}</label>
        </div>
        <hr/>
        <div className="card-footer bg-danger text-white">
          <strong>Categoría: </strong> {this.state.category_pr.name}
        </div>
      </div>
    );
  }
}

export default Product;