import React, { Component } from 'react';
import EditableCategory from './editable_category';

class CategoryList extends Component {
  render() {
    const categories = this.props.categories.map((category) => (
      <EditableCategory
        key={category.id}
        id={category.id}
        name={category.name}
        description={category.description}
        restaurant={category.restaurant}
        onDeleteClick={this.props.onDeleteClick}
        onUpdateClick={this.props.onUpdateClick}
      ></EditableCategory>
    ));


     if(Object.entries(categories).length===0){
      return <div className="card-deck"><h5>No hay categorías para mostrar.</h5></div>
     }
    return <div className="card-deck">{categories}</div>;
  }
}

export default CategoryList;
