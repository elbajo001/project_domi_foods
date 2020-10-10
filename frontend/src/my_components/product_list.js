import React, { Component } from 'react';
import EditableProduct from './editable_product';

class ProductList extends Component {
  render() {
    const books = this.props.books.map((book) => (
      <EditableProduct
        key={book.id}
        id={book.id}
        title={book.title}
        author={book.author}
        description={book.description}
        onDeleteClick={this.props.onDeleteClick}
        onUpdateClick={this.props.onUpdateClick}
      ></EditableProduct>
    ));
    return <div className="row">{books}</div>;
  }
}

export default ProductList;
