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
    return <div>{products}</div>;
  }
}

export default ProductList;
