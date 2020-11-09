import React, { Component } from "react";

class Category extends Component {
  /*Componente que muestra la información de la categoría*/
  /*Parámetros: dirección ip del host que establece conexión con el servidor, esto para obtener
  *correctamente la imagen de la categoría que viene serializada en formato JSON.*/
  state = {
    dir_ip: "192.168.0.18"
  }

  //función que renderiza el contenido de este componente.
  render() {
    const url = `http://${this.state.dir_ip}:8000${this.props.image}`;

    return (
      <div className="card" /* style="width: 18rem;" */>
        <div className="card-header d-flex justify-content-between bg-danger text-white">
          <span>
            <h6 className="text-white"><strong>{this.props.name}</strong></h6>
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
        <img src={url} alt="category" height="150" width="250" />
        <div className="card-body text-dark">
          <hr />
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Category;