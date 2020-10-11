import React,{Component} from 'react';
import ReactDOM from "react-dom";


class RestaurantForm extends Component {
  state = {
    id: this.props.id || "",
    nit: this.props.nit || "",
    name: this.props.name || "",
    address_location: this.props.address_location || "",
    phone_num: this.props.phone_num || "",
    web_page: this.props.web_page || "",
    hours: this.props.hours || "",
    id_admin: this.props.id_admin || ""
  };
  handleFormSubmit = (evt) => {
    evt.preventDefault();
    this.props.onFormSubmit({ ...this.state });
  };
  handleNitUpdate = (evt) => {
    this.setState({ nit: evt.target.value });
  };
  handleNameUpdate = (evt) => {
    this.setState({ name: evt.target.value });
  };
  handleAddressLocationUpdate = (evt) => {
    this.setState({ address_location: evt.target.value });
  };

  handlePhoneNumUpdate = (evt) => {
    this.setState({ phone_num: evt.target.value });
  };

  handleWebPageUpdate = (evt) => {
    this.setState({ web_page: evt.target.value });
  };

  handleHoursUpdate = (evt) => {
    this.setState({ hours: evt.target.value });
  };


  handleIdAdminUpdate = (evt) => {
    this.setState({ id_admin: evt.target.value });
  };

  render() {
    const buttonText = this.props.id
      ? "Update Restaurant"
      : "Create Restaurant";
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>{this.state.id}</label>
        <div className="form-group">
          <label>Nit</label>
          <input
            type="text"
            placeholder="Enter a nit"
            value={this.state.nit}
            onChange={this.handleNitUpdate}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Restaurant's name"
            value={this.state.name}
            onChange={this.handleNameUpdate}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Address_location</label>
          <textarea
            className="form-control"
            placeholder="Address_location"
            rows="2"
            value={this.state.address_location}
            onChange={this.handleAddressLocationUpdate}
          >
            {this.state.description}
          </textarea>

          <div className="form-group">
            <label>Phone number</label>
            <input
              type="text"
              placeholder="Enter a phone number"
              value={this.state.phone_num}
              onChange={this.handlePhoneNumUpdate}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Web page</label>
            <input
              type="text"
              placeholder="Enter a web page address"
              value={this.state.web_page}
              onChange={this.handleWebPageUpdate}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Hours</label>
            <input
              type="text"
              placeholder="Enter the Restaurant's schedule"
              value={this.state.hours}
              onChange={this.handleHoursUpdate}
              className="form-control"
            />
          </div>

           <div className="form-group">
            <label>Admin id</label>
            <input
              type="text"
              placeholder="Enter admin id"
              value={this.state.id_admin}
              onChange={this.handleIdAdminUpdate}
              className="form-control"
            />
          </div>

        </div>
        <div className="form-group d-flex justify-content-between">
          <button type="submit" className="btn btn-md btn-primary">
            {buttonText}
          </button>
          <button
            type="button"
            className="btn btn-md btn-secondary"
            onClick={this.props.onCancelClick}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default RestaurantForm;