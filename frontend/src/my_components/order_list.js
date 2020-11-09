import React, { Component } from 'react';
import EditableOrder from './editable_order';

class OrderList extends Component {
  
  /*Componente que muestra la lista de pedidos de un restaurante*/

  render() {
    const orders = this.props.orders.map((order) => (
      <EditableOrder
        key={order.order}
        id={order.order}
        name={order.name}
        cantidad={order.candidad}
        precio={order.precio}
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
