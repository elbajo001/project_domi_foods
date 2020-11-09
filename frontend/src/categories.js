import React,{Component} from 'react';
import CategoryList from './my_components/category_list';
import ToggleableCategoryForm from './my_components/toggle_category_form';

class Categories extends Component{

  /*Componente que despliega las categorías de un restaurante determinado*/

  /*Constructor de la clase*/
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
	
  /*Parámetros de entrada del componente: lista de categorías que son discriminadas por restaurante
   *Además de la dirección ip del host que establece conexión con el servidor.*/
	state = {
    	categories: [],
		  restaurants:[],
		  restaurant_id: "",
      dir_ip:"192.168.88.9",
  	};


    //Permite listar categorías de un restaurante escogido.
	  handleChange(event){
		 var id = "";

    for (var i = 0; i < this.state.restaurants.length; i++) {
      if(this.state.restaurants[i].name === event.target.value){
        id = this.state.restaurants[i].id;
      }
    }

      fetch(`http://${this.state.dir_ip}:8000/restaurants/api/restaurants/${id}/categories/`)
       .then((response) => response.json())
       .then((data) => {
         this.setState({ categories: data });
      });
     
	  }

    //Permite listar restaurantes para escoger uno y traer sus categorías 
    componentDidMount() {
    	const {id} = this.props.match.params;
      
		  fetch(`http://${this.state.dir_ip}:8000/restaurants/api/admin/${id}/restaurants`)
		  .then((response) => response.json())
		  .then((data) => {
			this.setState({ restaurants: data });
		  });
		};


    //crud de categorías
    
    //Permite crear una categoría
  	createNewCategory = (category) => {
      alert(category.restaurant_id);
      const uploadData = new FormData();
      uploadData.append('id', category.id);
      uploadData.append('name', category.name);
      uploadData.append('description', category.description);
      uploadData.append('image', category.image);
      uploadData.append('restaurant', category.restaurant);

    fetch(

    	`http://${this.state.dir_ip}:8000/restaurants/api/categories/`, {

        method: "POST",
        /*headers: {
          "Content-Type": "application/json",
        },*/
        body: uploadData,//body: JSON.stringify(category),
      }).then(response => response.json())
        .then(category => {
          this.setState({categories: this.state.categories.concat([category])});
        });
    }


  //Permite actualizar categoría
  updateCategory = (newCategory) => {
    const uploadData = new FormData();
      uploadData.append('id', newCategory.id);
      uploadData.append('name', newCategory.name);
      uploadData.append('description', newCategory.description);
      uploadData.append('image', newCategory.image);
      uploadData.append('restaurant', newCategory.restaurant);

    fetch(`http://${this.state.dir_ip}:8000/restaurants/api/categories/${newCategory.id}/`,
      {
        method: "PUT",
        /*headers: {
          "Content-Type": "application/json",
        },*/
        body: uploadData,//body: JSON.stringify(newCategory),
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


    //Permite eliminar una categoría
  	deleteCategory = (categoryId) => {
    	fetch(`http://${this.state.dir_ip}:8000/restaurants/api/categories/${categoryId}/`,
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

  //Función que se encarga de renderizar para mostrar el contenido
	render(){
		return(
			<div id="content" className="p-4 p-md-5 pt-5">
			 <main>
          <div className="container-fluid">
					<h2 className="font-weight-bold text-danger mt-4 bg-white" align="center">Información de las Categorías</h2>
          <div class="form-group mt-5">
					<main className="d-flex justify-content-center my-4">
            			<div className="jumbotron bg-light">
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

                 <p  className="text-dark" align="center"><i>Escoja alguno de los restaurantes para ver sus categorías</i></p>
              <div className="footer">
                  <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                        {this.state.restaurants.map((restaurant)=>(
                        <li className="page-item"><button className="page-link text-danger font-weight-bold" value={restaurant.name} onClick={this.handleChange}>{restaurant.name}</button></li>
                        ))}
                    </ul>
                  </nav>
              </div>

          		</div>
          	</div>
        	</main>
		</div>
		);
	}
}

export default Categories;
