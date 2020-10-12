import React, { Component } from "react";

class Category extends Component {
  render() {
    return (
      <div className="card" /* style="width: 18rem;" */>
        <div className="card-header d-flex justify-content-between bg-danger text-white">
          <span>
            <strong>Category: </strong>
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
        {this.props.description}</div>
        <div className="card-footer bg-danger text-white">
          <strong>Restaurant:</strong> {this.props.restaurant}
        </div>
      </div>
    );
  }
}

export default Category;