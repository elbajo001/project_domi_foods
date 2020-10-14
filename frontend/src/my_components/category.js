import React, { Component } from "react";

class Category extends Component {
  
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
          <img src="https://lorempics.com/200x150/337AB7/FFFFFF" alt="category" height="150" width="200"/>
        <hr/>
        <div className="card-body text-dark">
        {this.props.description}</div>
      </div>
    );
  }
}

export default Category;