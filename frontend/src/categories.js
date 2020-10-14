import React,{Component} from 'react';
import CategoryList from './my_components/category_list';
import ToggleableCategoryForm from './my_components/toggle_category_form';

class Categories extends Component{
	
	state = {
    	categories: [],
		  restaurants:[],
		  restaurant_id: "",
  	};


    //listar categorías de un restaurante dado
	  handleChange(event){
		  this.setState({ restaurant_id:event.target.value });

      fetch(`http://192.168.1.151:8000/restaurants/api/restaurants/categories/${this.state.restaurant_id}`)
       .then((response) => response.json())
       .then((data) => {
         this.setState({ categories: data });
      });
     
	  }

    //listar restaurantes para escoger uno y traer sus categorías 
    componentDidMount() {
    	
		  fetch("http://192.168.1.151:8000/restaurants/api/restaurants")
		  .then((response) => response.json())
		  .then((data) => {
			this.setState({ restaurants: data });
		  });
		};


    //crud de categorías
    
    //crear categoría
  	createNewCategory = (category) => {
    fetch(
    	'http://192.168.1.151:8000/restaurants/api/categories/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
      }).then(response => response.json())
        .then(category => {
          this.setState({categories: this.state.categories.concat([category])});
        });
    }


  //actualizar categoría
  updateCategory = (newCategory) => {
    fetch(
      `http://192.168.1.151:8000/restaurants/api/categories/${newCategory.id}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCategory),
      }).then(response => response.json())
      .then(newCategory => {
        const newCategories = this.state.categories.map(category => {
          if (category.id === newCategory.id) {
            return Object.assign({}, newCategory)
          } else {
            return category;
          }
        });
        this.setState({categories: newCategories});
      });
  };


    //eliminar categoría
  	deleteCategory = (categoryId) => {
    	fetch(
      		`http://192.168.1.151:8000/restaurants/api/categories/${categoryId}/`,
      	{
        	method: "DELETE",
        	headers: {
          		"Content-Type": "application/json",
        	}
      	}).then(() => {
      		this.setState({categories: this.state.categories.filter(
          	category => category.id !== categoryId)})
         });
    }

  //renderizar para mostrar el contenido
	render(){
		return(
			<div id="content" class="p-4 p-md-5 pt-5">
			 <main>
                <div class="container-fluid">
					<h1 class="font-weight-bold text-danger mt-4">Información de las Categorías</h1>
          <div class="form-group mt-5">
						<label className="form-control-lg">Restaurante:</label>
						<select className="form-control-lg" value="Seleccione" name="restaurant" id="restaurant" onChange={this.handleChange.bind(this)}>
							<option>Seleccione...</option>
              {this.state.restaurants.map((restaurant)=>(
								<option key={restaurant.id} value={restaurant.id}>{restaurant.name}</option>
							))}
						</select>
					<main className="d-flex justify-content-center my-4">
            			<div className="jumbotron bg-white col-auto">
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