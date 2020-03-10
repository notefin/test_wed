import React from "react";
import "./App.css";
import "./css/primitive.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "joe", car: "bmw" };
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSelectChange = event => {
    this.setState({ car: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("submitting");
    console.table(this.state);
  };

  render() {
    return (
      <div>
        <h1>My Form</h1>
        <form
          onSubmit={this.handleSubmit}
          style={{ width: "60%", margin: "2% auto" }}
        >
          <label>
            <input
              type="text"
              name="first-name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Pick your favorite car:
            <select value={this.state.car} onChange={this.handleSelectChange}>
              <option value="ford">Ford</option>
              <option value="mazda">Mazda</option>
              <option value="holden">Holden</option>
              <option value="volkswagen">VW</option>
              <option value="bmw">B.M.W</option>
            </select>
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;