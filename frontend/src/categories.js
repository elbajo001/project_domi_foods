import React,{Component} from 'react';
import CategoryList from './my_components/category_list';
import ToggleableCategoryForm from './my_components/toggle_category_form';

class Categories extends Component{
	
	state = {
    	categories: [],
		restaurants:[],
		restaurant_id:""
  	};

	  handleChange(event){
		this.setState({value:event.target.value});
	  }

  	 componentDidMount() {
    	fetch('http://localhost:8000/restaurants/api/restaurants/4/categories')
      	.then((response) => response.json())
      	.then((data) => {
         	this.setState({ categories: data });
		  });
		  fetch("http://localhost:8000/restaurants/api/restaurants")
		  .then((response) => response.json())
		  .then((data) => {
			this.setState({ restaurants: data });
		  });
		};
  	createNewCategory = (category) => {
    fetch(
    	'http://localhost:8000/restaurants/api/categories/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(category)
    })
      .then((response) => response.json())
      .then((category) => {
        this.setState({
          categories: this.state.categories.concat([category])
        });
      });
  };

  updateCategory = (newCategory) => {
    fetch(
      `http://localhost:8000/restaurants/api/categories/${newCategory.id}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newCategory)
      }
    )
      .then((response) => response.json())
      .then((newCategory) => {
        const newCategories = this.state.categories.map((category) => {
          if (category.id === newCategory.id) {
            return Object.assign({}, newCategory);
          } else {
            return newCategory;
          }
        });
        this.setState({ categories: newCategories });
      });
  };

  	deleteCategory = (categoryId) => {
    	fetch(
      		`http://localhost:8000/restaurants/api/categories/${categoryId}/`,
      	{
        	method: "DELETE",
        	headers: {
          		"Content-Type": "application/json"
        	}
      	}
    	).then(() => {
      		this.setState({
       		 categories: this.state.categories.filter(
          	(category) => category.id !== categoryId
        	)
      	});
    });
  };



	render(){
		return(
			<div id="content" class="p-4 p-md-5 pt-5">
			 <main>
                <div class="container-fluid">
					<h1 class="font-weight-bold text-danger mt-4">Información de las Categorías</h1>
					<div class="form-group">
						<label className="form-control-label">Restaurante:</label>
						<select className="form-control" name="restaurant" id="restaurant" onChange={this.handleChange}>
							{this.state.restaurants.map((restaurant)=>(
								<option key={restaurant.id} value={restaurant.id}>{restaurant.name}</option>
							))}
						</select>
					<main className="d-flex justify-content-center my-4">
            			<div className="col-8">
            				<CategoryList
              					categories={this.state.categories}
              					onDeleteClick={this.deleteCategory}
              					onUpdateClick={this.updateCategory}
            				/>
            				<ToggleableCategoryForm
              					onCategoryCreate={this.createNewCategory}
            				/>
            			</div>
            		</main>
          		</div>
          	</div>
        	</main>
		</div>
		);
	}
}

export default Categories;