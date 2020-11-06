import React, { Component } from "react";

class Delivery extends Component {
  
  render() {
    return (
      <div className="card" /* style="width: 18rem;" */>
        <div className="card-header d-flex justify-content-between bg-danger text-white">
          <span>
            <h6 className="text-white"><strong>Order</strong></h6>
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
           <img  className="card-img-top" src="https://lorempics.com/200x150/337AB7/FFFFFF" alt="category" height="150" width="250"/>
             <hr/>
            <p>Detail</p>
        </div>
      </div>
    );
  }
}

export default Delivery;