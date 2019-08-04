import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import ListaNoticias from "./components/ListaNoticias";
import Form from "./components/Form";
import PropTypes from "prop-types";

class App extends Component {
  state = {
    noticias: [],
    category: "general"
  };

  componentDidMount() {
    this.consultarNoticias(this.state.category);
  }

  consultarNoticias = async (category = "general") => {
    const url = `https://newsapi.org/v2/top-headlines?country=ru&category=${category}&apiKey=b7aa048b86df4122bfc4c7cacde795a0`;

    const response = await fetch(url);
    const noticiass = await response.json();
    this.setState({
      noticias: noticiass.articles
    });
  };

  render() {
    return (
      <Fragment>
        <Header title="Noticias" />
        <div className="container white news-container">
          <Form consultarNoticias={this.consultarNoticias} />
          <ListaNoticias noticias={this.state.noticias} />
        </div>
      </Fragment>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

Form.propTypes = {
  consultarNoticias: PropTypes.func.isRequired
};

ListaNoticias.propTypes = {
  noticias: PropTypes.array.isRequired
};

export default App;
