
// /* globals React */
import React from 'react';
import {
  Form, FormControl, FormGroup, ControlLabel, Button,
} from 'react-bootstrap';

export default class ProductAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { addProduct } = this.props;
    e.preventDefault();
    const form = document.forms.productAdd;
    const product = {
      category: form.category.value,
      price: form.price.value.slice(1),
      name: form.name.value,
      image: form.image.value,
    };
    addProduct(product);
  }

  render() {
    return (
      <section>
        <p>Add a new product to inventory</p>
        <hr />
        <Form inline name="productAdd" onSubmit={this.handleSubmit}>
          <div className="product-inventory">
            <FormGroup>
              <ControlLabel> Category:</ControlLabel>
              {' '}
              <FormControl componentClass="select" name="category" id="category">
                <option value="Accessories">Accessories</option>
                <option value="Shirts">Shirts</option>
                <option value="Jeans">Jeans</option>
                <option value="Jackets">Jackets</option>
                <option value="Sweaters">Sweaters</option>
              </FormControl>
            </FormGroup>
          </div>
          {' '}
          <div className="product-inventory">
            <FormGroup>
              <ControlLabel> Price:</ControlLabel>
              {' '}
              <FormControl type="text" id="price" defaultValue="$" />
            </FormGroup>
          </div>
          {' '}
          <div className="product-inventory">
            <FormGroup>
              <ControlLabel> Product Name:</ControlLabel>
              {' '}
              <FormControl type="text" id="name" />
            </FormGroup>
          </div>
          {' '}
          <div className="product-inventory">
            <FormGroup>
              <ControlLabel> Image URL: </ControlLabel>
              {' '}
              <FormControl type="text" id="image" />
            </FormGroup>
          </div>

          <Button bsStyle="primary" type="submit">Add Product</Button>
        </Form>
      </section>

    );
  }
}
