import React, { Component } from "react";

class Delivery extends Component {
   /*Componente que muestra la información del pedido*/

  render() {
    return (
      <div className="card" /* style="width: 18rem;" */>
        <div className="card-header d-flex justify-content-between bg-danger text-white">
          <span>
            <h6 className="text-white"><strong>Order: {this.props.id}</strong></h6>
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
              {this.props.client}
              {this.props.estimated_time}
              {this.props.current_address}
              {this.props.longitude}
              {this.props.latitude}
              {this.props.observation}
              {this.props.state}
              {this.props.total_to_pay}
            </p>
        </div>
      </div>
    );
  }
}

export default Delivery;