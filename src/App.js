import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import ListaNoticias from "./components/ListaNoticias";

class App extends Component {
  state = {};

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=ru&category=business&apiKey=b7aa048b86df4122bfc4c7cacde795a0`;

    const response = await fetch(url);
    const noticias = await response.json();
    this.setState({
      noticias: noticias.articles
    });
    //console.log(noticias.articles);
  };

  render() {
    return (
      <Fragment>
        <Header title="Noticias" />
        <div className="container white news-container">
          <ListaNoticias />
        </div>
      </Fragment>
    );
  }
}

export default App;
