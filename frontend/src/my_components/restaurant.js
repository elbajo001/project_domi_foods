import React,{Component} from 'react';
//import ReactDOM from "react-dom";


class Restaurant extends Component {
  render() {
    return (
      <div className="card" /* style="width: 18rem;" */>
        <div className="card-header d-flex justify-content-between bg-danger text-white">
          <span>
            <h4 className="text-white"><strong>Nombre: </strong>
            {this.props.name}
            </h4>
          </span>
          <div>
            <h4>
            <span onClick={this.props.onEditClick} className="mr-2 text-white">
              <i className="far fa-edit"></i>
            </span>
            <span onClick={this.props.onDeleteClick}>
              <i className="fas fa-trash text-white"></i>
            </span>
            </h4>
          </div>
        </div>
        <hr/>
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
      </div>
    );
  }
}

export default Restaurant;