import React, { Component } from "react";

class Form extends Component {
  state = {
    category: ""
  };

  handleOnChange = e => {
    this.setState(
      {
        category: e.target.value
      },
      () => {
        this.props.consultarNoticias(this.state.category);
      }
    );
  };

  render() {
    return (
      <div className="buscador row">
        <div className="col s12 m8 offset-m2">
          <form>
            <h2>Select category</h2>
            <div className="input-field s12 m8">
              <select onChange={this.handleOnChange}>
                <option value="general">general</option>
                <option value="business">business</option>
                <option value="entertainment">entertainment</option>
                <option value="science">science</option>
                <option value="sports">sports</option>
                <option value="technology">technology</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
