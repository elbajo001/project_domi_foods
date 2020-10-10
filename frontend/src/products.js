import React,{Component} from 'react';
import ProductList from './my_components/product_list';
import ToggleableProductForm from './my_components/toggle_product_form';

class Products extends Component{

	state = {
    products: []
  };




 createNewBook = (book) => {
    book.id = Math.floor(Math.random() * 1000);
    this.setState({ books: this.state.books.concat([book]) });
  };

  updateBook = (newBook) => {
    const newBooks = this.state.books.map((book) => {
      if (book.id === newBook.id) {
        return Object.assign({}, newBook);
      } else {
        return book;
      }
    });

    this.setState({ books: newBooks });
  };

  deleteBook = (bookId) => {
    this.setState({
      books: this.state.books.filter((book) => book.id !== bookId)
    });
  };



	render(){
		return(
			<div id="content" class="p-4 p-md-5 pt-5">
			 <main>
         <div class="container-fluid">
					<h1 class="font-weight-bold text-danger mt-4">Información de los Platos</h1>
					 <main className="d-flex justify-content-center my-4">
                    <div className="col-sm-6">
          					<ProductList
            					books={this.state.books}
            					onDeleteClick={this.deleteBook}
            					onUpdateClick={this.updateBook}
         					   />
         				 <ToggleableProductForm onBookCreate={this.createNewBook} />
                  </div>
      				</main>
          </div>
			 </main>
			</div>
		);
	}
}

export default Products;