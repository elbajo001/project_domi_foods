import React,{Component} from 'react';
//import ReactDOM from "react-dom";


class RestaurantForm extends Component {

  constructor(props){
    super(props);
    //this.fileInput = React.createRef();
  }


  state = {
    id: this.props.id || "",
    nit: this.props.nit || "",
    name: this.props.name || "",
    address_location: this.props.address_location || "",
    phone_num: this.props.phone_num || "",
    web_page: this.props.web_page || "",
    hours: this.props.hours || "",
    id_admin: 1
  };

  handleFormSubmit = (evt) => {
    evt.preventDefault();
    /*let formData = new FormData();
    formData.append('id', this.state.id);
    formData.append('nit', this.state.nit);
    formData.append('name', this.state.name);
    formData.append('address_location', this.state.address_location);
    formData.append('phone_num', this.state.phone_num);
    formData.append('web_page', this.state.web_page);
    formData.append('hours', this.state.hours);
    formData.append('image', this.state.image);*/
    this.props.onFormSubmit({ ...this.state});
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


  handleImageUpdate = (evt) => {
      this.setState({image: evt.target.files[0]});
  }


  handleIdAdminUpdate = (evt) => {
    this.setState({ id_admin: evt.target.value });
  };

  render() {
    const buttonText = this.props.id
      ? "Update Restaurant"
      : "Create Restaurant";
    return (
      <form onSubmit={this.handleFormSubmit} className="text-dark">
        <div className="form-row">
          <div className="form-group col-sm-6">
          <label className="form-control-label">Nit</label>
          <input
            type="text"
            placeholder="Enter a nit"
            value={this.state.nit}
            onChange={this.handleNitUpdate}
            className="form-control"
          />
          </div>

        <div className="form-group col-sm-6">
          <label className="form-control-label">Name</label>
          <input
            type="text"
            placeholder="Restaurant's name"
            value={this.state.name}
            onChange={this.handleNameUpdate}
            className="form-control"
          />
        </div>
        </div>

        <div className="form-group">
          <label className="form-control-label">Address_location</label>
          <textarea
            className="form-control"
            placeholder="Address_location"
            rows="3"
            value={this.state.address_location}
            onChange={this.handleAddressLocationUpdate}
          >
            {this.state.description}
          </textarea>
          </div>

          <div className="form-row">
            <div className="form-group col-sm-6">
            <label className="form-control-label">Phone number</label>
            <input
              type="text"
              placeholder="Enter a phone number"
              value={this.state.phone_num}
              onChange={this.handlePhoneNumUpdate}
              className="form-control"
            />
            </div>

          <div className="form-group col-sm-6">
            <label className="form-control-label">Web page</label>
            <input
              type="text"
              placeholder="Enter a web page address"
              value={this.state.web_page}
              onChange={this.handleWebPageUpdate}
              className="form-control"
            />
          </div>
          </div>

          <div className="form-row">
            <label className="form-control-label">Hours</label>
            <input
              type="text"
              placeholder="Enter the Restaurant's schedule"
              value={this.state.hours}
              onChange={this.handleHoursUpdate}
              className="form-control"
            />
          </div>
        


        <div className="mt-3 form-group d-flex justify-content-between">
          <button type="submit" className="btn btn-md btn-danger">
            {buttonText}
          </button>
          <button
            type="button"
            className="btn btn-md btn-primary"
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