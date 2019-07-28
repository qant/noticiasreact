import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import ListaNoticias from "./components/ListaNoticias";

class App extends Component {
  state = {
    noticias: []
  };

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=ru&category=business&apiKey=b7aa048b86df4122bfc4c7cacde795a0`;

    const response = await fetch(url);
    const noticiass = await response.json();
    this.setState({
      noticias: noticiass.articles
    });
    console.log(noticiass.articles);
  };

  render() {
    console.log(this.state.noticias);
    return (
      <Fragment>
        <Header title="Noticias" />
        <div className="container white news-container">
          <ListaNoticias noticias={this.state.noticias} />
        </div>
      </Fragment>
    );
  }
}

export default App;
