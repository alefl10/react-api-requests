import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import NewSingle from './NewSingle';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
    this.renderItems = this.renderItems.bind(this);
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=7bd391579f2d4b838595a2b7c9962b46`;
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          news: data.articles,
        });
      })
      .catch(err => console.log(err));
  }

  renderItems() {
    return this.state.news.map(item => (
      <NewSingle key={item.url} item={item} />
    ));
  }

  render() {
    return (
      <div className="row">
        {this.renderItems()}
      </div>
    );
  }
}

// News.propTypes = {
//   items: PropTypes.arrayOf(
//     item: PropTypes.shape({
//
//     }).isRequired,
//   ).isRequired,
// };

export default News;
