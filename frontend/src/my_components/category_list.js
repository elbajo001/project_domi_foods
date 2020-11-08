import React, { Component } from 'react';
import EditableCategory from './editable_category';

class CategoryList extends Component {
  //Componente que despliega la lista de categorías.
  
  render() {
    const categories = this.props.categories.map((category) => (
      <EditableCategory
        key={category.id}
        id={category.id}
        name={category.name}
        description={category.description}
        image={category.image}
        restaurant={category.restaurant}
        onDeleteClick={this.props.onDeleteClick}
        onUpdateClick={this.props.onUpdateClick}
      ></EditableCategory>
    ));


     if(Object.entries(categories).length===0){
      return <div className="card-deck"><h5>No hay categorías para mostrar.</h5></div>
     }
    return <div className="row">{categories}</div>;
  }
}

export default CategoryList;
