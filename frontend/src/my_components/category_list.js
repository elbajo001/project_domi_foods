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
        restaurant={[category.restaurant]}
        onDeleteClick={this.props.onDeleteClick}
        onUpdateClick={this.props.onUpdateClick}
      ></EditableCategory>
    ));
    return <div className="row">{categories}</div>;
  }
}

export default CategoryList;
