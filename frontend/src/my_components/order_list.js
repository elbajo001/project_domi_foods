import React, { Component } from 'react';
import EditableOrder from './editable_order';

class OrderList extends Component {
  render() {
    //const orders = this.props.orders.map((order) => (
      <EditableOrder
  
        onDeleteClick={this.props.onDeleteClick}
        onUpdateClick={this.props.onUpdateClick}
      ></EditableOrder>
    ///));


     if(Object.entries(orders).length===0){
      return <div className="card-deck"><h5>No hay órdenes para mostrar.</h5></div>
     }
    return <div className="row">{orders}</div>;
  }
}

export default OrderList;
