import React, { Component } from 'react';
import EditableOrder from './editable_order';

class OrderList extends Component {
  render() {
    const orders = this.props.orders.map((order) => (
      <EditableOrder
        key={order.id}
        id={order.id}
        client={order.client}
        estimated_time={order.estimated_time}
        current_address={order.current_address}
        longitude={order.longitude}
        latitude={order.latitude}
        observation={order.observation}
        state={order.state}
        onDeleteClick={this.props.onDeleteClick}
        onUpdateClick={this.props.onUpdateClick}
      ></EditableOrder>
    ));

     if(Object.entries(orders).length===0){
      return <div className="card-deck"><h5>No hay órdenes para mostrar.</h5></div>
     }
    return <div className="row">{orders}</div>;
  }
}

export default OrderList;
