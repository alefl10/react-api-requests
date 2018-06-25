import React, { Component } from 'react';
import axios from 'axios';
import SingleSide from './SingleSide';


class Sidenews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenews: [],
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=3c5c8f726f4f4d87a352e63017c68eb0`;

    axios.get(url)
      .then((response) => {
        this.setState({
          sidenews: response.data.articles,
        });
      })
      .catch(error => console.log(error));
  }

  renderItems() {
    return this.state.sidenews.map(item => (
      <SingleSide key={item.url} item={item} />
    ));
  }

  render() {
    return (
      <div>
        {this.renderItems()}
      </div>
    );
  }
}

export default Sidenews;
