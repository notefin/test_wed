import React, { Component } from "react";

export default class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <table>
        <TableHeader />
        <TableBody
          characterData={this.props.characterData}
          removePerson={this.props.removePerson}
        />
      </table>
    );
  }
}

export class TableBody extends React.Component {
  render() {
    var rows = this.props.characterData.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.job}</td>
          <td>
            <button data-index={item.uuid} onClick={this.props.removePerson}>
              Delete
            </button>
          </td>
        </tr>
      );
    });
    return <tbody>{rows}</tbody>;
  }
}

export class TableHeader extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    );
  }
}