import React, { Component } from "react";

class Product extends Component {
   /*Componente que muestra la información del producto*/
   /*Parámetros: dirección ip del host que establece conexión con el servidor, esto para obtener
   *correctamente la imagen del producto que viene serializada en formato JSON, y la
   *la información de la categoría a la que el producto pertenece.*/
  
  state={
    category_pr:{
      id: "",
      name: "",
      description: "",
    },
    dir_ip:"192.168.88.9",
  }

  componentDidMount(){
      fetch(`http://${this.state.dir_ip}:8000/restaurants/api/categories/${this.props.category}/`)
        .then((response) => response.json())
        .then((data) => {
          this.setState({ category_pr: data });
      });
  }

  render() {
    const url=`http://${this.state.dir_ip}:8000${this.props.image}`;
    return (
      <div className="card" /* style="width: 18rem;" */>
        <div className="card-header d-flex justify-content-between bg-danger text-white">
          <span>
            <strong>{this.props.name}</strong>
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
        <img src={url} alt={this.props.image} width="348" height="200"/>
        <div className="card-body text-dark">
         <hr/>
        <div>{this.props.description}</div>
        <label>Precio: {this.props.price}</label>
        </div>
        <hr/>
        <div className="card-footer bg-danger text-white">
          <strong>Categoría: </strong> {this.state.category_pr.name}
        </div>
      </div>
    );
  }
}

export default Product;
