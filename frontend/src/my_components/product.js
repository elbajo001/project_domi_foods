import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div className="card" /* style="width: 18rem;" */>
        <div className="card-header d-flex justify-content-between">
          <span>
            <strong>Name: </strong>
            {this.props.name}
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
        <div className="card-body">
         <img className="card-img-top" src="https://higuma.github.io/bootstrap-4-tutorial/img/286x180.svg" alt="Card image cap"/>
        {this.props.description}
        {this.props.price}
        </div>
        <div className="card-footer">
          <strong>category:</strong> {this.props.category}
        </div>
      </div>
    );
  }
}

export default Product;