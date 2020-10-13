import React,{Component} from 'react';
import ProductList from './my_components/product_list';
import ToggleableProductForm from './my_components/toggle_product_form';

class Products extends Component{

	state = {
    products: []
  };

  componentDidMount() {
    fetch('http://localhost:8000/restaurants/api/restaurants/4/products')
      .then((response) => response.json())
      .then((data) => {
         this.setState({ products: data });
    });
  };


 createNewProduct = (product) => {
  fetch(
    'http://localhost:8000/restaurants/api/products/', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(product)
  })
    .then((response) => response.json())
    .then((product) => {
      this.setState({
        products: this.state.products.concat([product])
      });
    });
  };

  updateProduct = (newProduct) => {
    fetch(
      `http://localhost:8000/restaurants/api/products/${newProduct.id}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct)
      })

      .then((response) => response.json())
      .then((newProduct) => {
        const newProducts = this.state.products.map((product) => {
          if (product.id === newProduct.id) {
            return Object.assign({}, newProduct);
          } else {
            return newProduct;
          }
        });
        this.setState({ products: newProducts });
      });
    };

  deleteProduct = (productId) => {
    fetch(
      `http://localhost:8000/restaurants/api/products/${productId}/`,
    {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
      }
    }
    ).then(() => {
      this.setState({
        products: this.state.products.filter(
        (product) => product.id !== productId)
    });
});
  };



	render(){
		return(
			<div id="content" class="p-4 p-md-5 pt-5">
			 <main>
         <div class="container-fluid">
					<h1 class="font-weight-bold text-danger mt-4">Información de los Platos</h1>
					 <main className="d-flex my-4 jumbotron bg-white">
                    <div className="col-auto">
          					<ProductList
            					products={this.state.products}
            					onDeleteClick={this.deleteProduct}
            					onUpdateClick={this.updateProduct}
         					   />
         				 <ToggleableProductForm onProductCreate={this.createNewProduct} />
                  </div>
      				</main>
          </div>
			 </main>
			</div>
		);
	}
}

export default Products;