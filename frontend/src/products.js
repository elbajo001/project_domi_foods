import React,{Component} from 'react';
import ProductList from './my_components/product_list';
import ToggleableProductForm from './my_components/toggle_product_form';

class Products extends Component{
  /*Componente que despliega la lista de los productos asociados a un restaurante.
   *Los parámetros de entrada son: 
   *la lista de restaurantes por la cual se discrimina la lista de productos.
   *la lista de productos que se va a visualizar.
   *el id del restaurante para el cual se van a ver los productos.
   *el nombre del restaurante para el cual se van a ver los productos.
   *la dirección ip del host que establece conexión con el servidor.
  */

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

	state = {
    products:[],
    restaurants:[],
    restaurant_id:"",
    restaurant_name:"nn",
    dir_ip:"192.168.88.9",
  }

//permite mostrar productos de un restaurante dado
 handleChange(event){
    //alert(event.target.value);
    var id = "";

    for (var i = 0; i < this.state.restaurants.length; i++) {
      if(this.state.restaurants[i].name === event.target.value){
        id = this.state.restaurants[i].id
      }
    }
    
     this.setState({restaurant_id:event.target.value});

      fetch(`http://${this.state.dir_ip}:8000/restaurants/api/restaurants/${id}/products`)
      .then((response) => response.json())
      .then((data) => {
         this.setState({products: data});
    });
    
  }

 handleClick(event){
  alert(this.state.restaurant_id);
  event.preventDefault();
}



  //crud de productos o platos


  //permite listar restaurantes de un administrador dado 
  //para escoger uno y mostrar sus productos
  componentDidMount() {
    const {id} = this.props.match.params;
     fetch(`http://${this.state.dir_ip}:8000/restaurants/api/admin/${id}/restaurants`)
      .then(response => response.json())
      .then(data => {
        this.setState({restaurants: data});
      });
  };

//permite crear un producto
 createNewProduct = (product) => {
  const uploadData = new FormData();
  uploadData.append('id', product.id);
  uploadData.append('category', product.category);
  uploadData.append('name', product.name);
  uploadData.append('price', product.price);
  uploadData.append('description', product.description);
  uploadData.append('image', product.image);

  fetch(
    `http://${this.state.dir_ip}:8000/restaurants/api/products/`, {
      method: "POST",
      /*headers: {
        "Content-Type": "application/json",
      },*/
      body: uploadData,//body: JSON.stringify(product),
    }).then(response => response.json())
      .then(product => {
        this.setState({products: this.state.products.concat([product])});
      });
}


  //permite actualizar un producto
  updateProduct = (newProduct) => {
     const uploadData = new FormData();
     uploadData.append('id', newProduct.id);
     uploadData.append('category', newProduct.category);
     uploadData.append('name', newProduct.name);
     uploadData.append('price', newProduct.price);
     uploadData.append('description', newProduct.description);
     uploadData.append('image', newProduct.image);
    

     fetch(`http://${this.state.dir_ip}:8000/restaurants/api/products/${newProduct.id}/`,
      {
        method: "PUT",
        /*headers: {
          "Content-Type": "application/json",
        },*/
        body: uploadData,//body: JSON.stringify(newProduct),
      }).then(response => response.json())
      .then(newProduct => {
        const newProducts = this.state.products.map(product => {
          if (product.id === newProduct.id) {
            return Object.assign({}, newProduct);
          } else {
            return product;
          }
        });
        this.setState({ products: newProducts });
      });
  }


  //permite eliminar un producto
  deleteProduct = (productId) => {
    fetch(`http://${this.state.dir_ip}:8000/restaurants/api/products/${productId}/`,
    {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json",
      },
    }).then(() => {
      this.setState({
        products: this.state.products.filter(
        product => product.id !== productId)})
      });
  }


 //función para renderizar para mostrar el contenido...
	render(){
		return(
			<div id="content" className="p-4 p-md-5 pt-5">
			 <main>
         <div className="container-fluid">
					<h2 className="font-weight-bold text-danger bg-light mt-4" align="center">Información de los Platos</h2>
					   <div class="form-group mt-2">
           <main className="d-flex justify-content-center">
                    <div className="jumbotron bg-light col-lg-12">
          					<ProductList
            					products={this.state.products}
            					onDeleteClick={this.deleteProduct}
            					onUpdateClick={this.updateProduct}
         					   />
         				 <ToggleableProductForm 
                    onProductCreate={this.createNewProduct} 
                  />
                 </div>
      				</main>
              </div>
               <p  className="text-dark" align="center"><i>Escoja alguno de los restaurantes para ver sus productos</i></p>
              <div className="footer">
              <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
               {this.state.restaurants.map((restaurant)=>(
                <li key={restaurant.id} className="page-item"><button className="page-link text-danger font-weight-bold" value={restaurant.name} onClick={this.handleChange}>{restaurant.name}</button></li>
              ))}
            </ul>
           </nav>
           </div>
          </div>
			 </main> 
			</div>
		);
	}
}

export default Products;
