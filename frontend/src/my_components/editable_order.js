import React, { Component } from 'react';
import Delivery from './delivery';

class EditableOrder extends Component {
  state = {
    inEditMode: false
  };
  enterEditMode = () => {
    this.setState({ inEditMode: true });
  };
  leaveEditMode = () => {
    this.setState({ inEditMode: false });
  };
  handleDelete = () => {
    this.props.onDeleteClick(this.props.id);
  };
  handleUpdate = (order) => {
    this.leaveEditMode();
    order.id = this.props.id;
    this.props.onUpdateClick(order);
  };
  render() {
    const component = () => {
      return (
        <Delivery
  
            onEditClick={this.enterEditMode}
            onDeleteClick={this.handleDelete}
        />
      );
    };
    return (
      <div className="col-lg-6 col-sm-6 mb-4" style={{ boxShadow: "0 0 5px #ccc" }}>
        {component()}
      </div>
    );
  }
}

export default EditableOrder;