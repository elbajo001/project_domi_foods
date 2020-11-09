import React, { Component } from "react";

class Delivery extends Component {
   /*Componente que muestra la información del pedido*/

  render() {
    return (
      <div className="card" /* style="width: 18rem;" */>
        <div className="card-header d-flex justify-content-between bg-danger text-white">
          <span>
            <h6 className="text-white"><strong>Order:{this.props.order}</strong></h6>
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
             <hr/>
            <p>
              {this.props.order}
              <br/>
              {this.props.name}
              <br/>
              {this.props.cantidad}
              <br/>
              {this.props.precio}
            </p>
        </div>
      </div>
    );
  }
}

export default Delivery;