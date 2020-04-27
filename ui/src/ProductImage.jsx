// /* globals React */
import React from 'react';
import graphQLFetch from './graphQLFetch.js';

export default class ProductImage extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    const { match: { params: { id: prevId } } } = prevProps;
    const { match: { params: { id } } } = this.props;
    if (id !== prevId) {
      this.loadData();
    }
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState(prevState => ({
      product: { ...prevState.product, [name]: value },
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { product } = this.state;
    console.log(product); // eslint-disable-line no-console
  }

  async loadData() {
    const query = `query product($id: Int!) {
        product(id: $id) {
          id name category price image
        }
      }`;
    const { match: { params: { id } } } = this.props;
    const data = await graphQLFetch(query, { id });
    if (data) {
      const { product } = data;
      this.setState({ product });
    } else {
      this.setState({ product: {} });
    }
  }

  render() {
    const { product: { id } } = this.state;
    const { match: { params: { id: propsId } } } = this.props;
    const { product: { name, image } } = this.state;
    if (id == null) {
      if (propsId != null) {
        return <h3>{`Product with ID ${propsId} not found.`}</h3>;
      }
      return null;
    }
    return (
      <div>
        <h3>{`Product : ${name}`}</h3>
        <img src={image} />
      </div>
    );
  }
}
