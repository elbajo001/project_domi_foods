import React,{Component} from 'react';
//import RestaurantDashboard from './pages/restaurant_file';
import ReactDOM from "react-dom";

class RestaurantDashboard extends Component {
  state = {
    restaurants: []
  };

  //building crud

  componentDidMount() {
    fetch("http://localhost:8000/restaurants/api/restaurants")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ restaurants: data });
      });
  }

  createNewRestaurant = (restaurant) => {
    fetch(
    	'http://localhost:8000/restaurants/api/restaurants/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(restaurant)
    })
      .then((response) => response.json())
      .then((restaurant) => {
        this.setState({
          restaurants: this.state.restaurants.concat([restaurant])
        });
      });
  };

  updateRestaurant = (newRestaurant) => {
    fetch(
      `http://localhost:8000/restaurants/api/restaurants/${newRestaurant.id}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newRestaurant)
      }
    )
      .then((response) => response.json())
      .then((newRestaurant) => {
        const newRestaurants = this.state.restaurants.map((restaurant) => {
          if (restaurant.id === newRestaurant.id) {
            return Object.assign({}, newRestaurant);
          } else {
            return Restaurant;
          }
        });
        this.setState({ restaurants: newRestaurants });
      });
  };

  deleteRestaurant = (restaurantId) => {
    fetch(
      `http://localhost:8000/restaurants/api/restaurants/${restaurantId}/`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(() => {
      this.setState({
        restaurants: this.state.restaurants.filter(
          (restaurant) => restaurant.id !== restaurantId
        )
      });
    });
  };

  render() {
    return (
      <div id="content" class="p-4 p-md-5 pt-5">
        <main>
          <div class="container-fluid">
            <h1 className="text-danger mt-4"><strong>Restaurantes</strong></h1>
             <main className="d-flex justify-content-center my-4">
            <div className="col-8">
            <RestaurantList
              restaurants={this.state.restaurants}
              onDeleteClick={this.deleteRestaurant}
              onUpdateClick={this.updateRestaurant}
            />
            <ToggleableRestaurantForm
              onRestaurantCreate={this.createNewRestaurant}
            />
            </div>
            </main>
          </div>
        </main>
      </div>
    );
  }
}

class RestaurantList extends Component {
  render() {
    const restaurants = this.props.restaurants.map((restaurant) => (
      <EditableRestaurant
        key={restaurant.id}
        id={restaurant.id}
        nit={restaurant.nit}
        name={restaurant.name}
        address_location={restaurant.address_location}
        phone_num={restaurant.phone_num}
        web_page={restaurant.web_page}
        hours={restaurant.hours}
        id_admin={restaurant.id_admin}
        onDeleteClick={this.props.onDeleteClick}
        onUpdateClick={this.props.onUpdateClick}
      ></EditableRestaurant>
    ));

    return <div>{restaurants}</div>;
  }
}
class ToggleableRestaurantForm extends Component {
  state = {
    inCreateMode: false
  };
  handleCreateClick = () => {
    this.setState({ inCreateMode: true });
  };
  leaveCreateMode = () => {
    this.setState({ inCreateMode: false });
  };
  handleCancleClick = () => {
    this.leaveCreateMode();
  };
  handleFormSubmit = (restaurant) => {
    this.leaveCreateMode();
    this.props.onRestaurantCreate(restaurant);
  };
  render() {
    if (this.state.inCreateMode) {
      return (
        <div className="mb-3 p-4" style={{ boxShadow: "0 0 10px #ccc" }}>
          <RestaurantForm
            onFormSubmit={this.handleFormSubmit}
            onCancelClick={this.handleCancleClick}
          />
        </div>
      );
    }
    return (
      <button onClick={this.handleCreateClick} className="btn btn-secondary">
        <i className="fas fa-plus"></i>
      </button>
    );
  }
}

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

class EditableRestaurant extends Component {
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
  handleUpdate = (restaurant) => {
    this.leaveEditMode();
    restaurant.id = this.props.id;
    this.props.onUpdateClick(restaurant);
  };

  render() {
    const component = () => {
      if (this.state.inEditMode) {
        return (
          <RestaurantForm
            id={this.props.id}
            nit={this.props.nit}
            name={this.props.name}
            address_location={this.props.address_location}
            phone_num={this.props.phone_num}
            web_page={this.props.web_page}
            hours={this.props.hours}
            id_admin={this.props.id_admin}
            onCancelClick={this.leaveEditMode}
            onFormSubmit={this.handleUpdate}
          />
        );
      }
      return (
        <Restaurant
          id={this.props.id}
          nit={this.props.nit}
          name={this.props.name}
          address_location={this.props.address_location}
          phone_num={this.props.phone_num}
          web_page={this.props.web_page}
          hours={this.props.hours}
          id_admin={this.props.id_admin}
          onEditClick={this.enterEditMode}
          onDeleteClick={this.handleDelete}
        />
      );
    };
    return (
      <div className="mb-3 p-4" style={{ boxShadow: "0 0 10px #ccc" }}>
        {component()}
      </div>
    );
  }
}

class Restaurant extends Component {
  render() {
    return (
      <div className="card" /* style="width: 18rem;" */>
        <div className="card-header d-flex justify-content-between">
          <span>
            <h4 className="text-primary"><strong>Name: </strong>
            {this.props.name}
            </h4>
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
          <img className="card-img-top" src={this.props.image} alt="Card image cap"/>
          <form>
          <div className="form-group row">
          <label className="col-sm-10 col-form-label">Nit: {this.props.nit}</label>
          <label className="col-sm-10 col-form-label">Dirección: {this.props.address_location}</label>
          <label className="col-sm-10 col-form-label">Teléfono: {this.props.phone_num}</label>
          <label className="col-sm-10 col-form-label">Horario:  {this.props.hours}</label>
          <label className="col-sm-10 col-form-label">Página web: {this.props.web_page}</label>
          </div>
          </form>
        </div>
        <div className="card-footer">
          <h6><strong>Admin:</strong> {this.props.id_admin}</h6>
        </div>
      </div>
    );
  }
}

export default RestaurantDashboard;
