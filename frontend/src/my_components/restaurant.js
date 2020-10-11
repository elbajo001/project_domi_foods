import React,{Component} from 'react';
import ReactDOM from "react-dom";


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
          <form>
          <div className="form-group row">
          <label className="col-sm-10 col-form-label-lg">Nit: {this.props.nit}</label>
          <label className="col-sm-10 col-form-label-lg">Dirección: {this.props.address_location}</label>
          <label className="col-sm-10 col-form-label-lg">Teléfono: {this.props.phone_num}</label>
          <label className="col-sm-10 col-form-label-lg">Horario:  {this.props.hours}</label>
          <label className="col-sm-10 col-form-label-lg">Página web: {this.props.web_page}</label>
          </div>
          </form>
        </div>
        <div className="card-footer">
          <h4 className="text-primary"><strong>Admin:</strong> {this.props.id_admin}</h4>
        </div>
      </div>
    );
  }
}

export default Restaurant;