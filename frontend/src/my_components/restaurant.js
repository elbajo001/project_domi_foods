import React,{Component} from 'react';
//import ReactDOM from "react-dom";


class Restaurant extends Component {
  render() {
    return (
      <div className="card" /* style="width: 18rem;" */>
        <div className="card-header d-flex justify-content-between bg-danger text-white">
          <span>
            <h6 className="text-white">{this.props.name}</h6>
          </span>
          <div>
            <h6>
            <span onClick={this.props.onEditClick} className="mr-2 text-white">
              <i className="far fa-edit"></i>
            </span>
            <span onClick={this.props.onDeleteClick}>
              <i className="fas fa-trash text-white"></i>
            </span>
            </h6>
          </div>
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShKy5uLANUObl_sqrfcu4MOq_Ohd_ZspinDg&usqp=CAU" alt="img"/>
        <div className="card-body text-dark">
              <label className="label">Nit: {this.props.nit}</label>
              <label className="label">Dirección: {this.props.address_location}</label>
              <label className="label">Teléfono: {this.props.phone_num}</label>
              <label className="label">Horario:  {this.props.hours}</label>
              <label className="label">Página web: {this.props.web_page}</label>
        </div>
      </div>
    );
  }
}

export default Restaurant;