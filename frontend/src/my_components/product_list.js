import React, { Component } from 'react';
import EditableProduct from './editable_product';

class ProductList extends Component {
  render() {
    const products = this.props.products.map((product) => (
      <EditableProduct
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}
        description={product.description}
        category={product.category}
        onDeleteClick={this.props.onDeleteClick}
        onUpdateClick={this.props.onUpdateClick}
      ></EditableProduct>
    ));
    if(Object.entries(products).length===0){
      return <div className="card-deck"><h3>No hay productos para mostrar.</h3></div>
    }
    return <div className="card-deck">
        {products}
    </div>;
  }
}

export default ProductList;
