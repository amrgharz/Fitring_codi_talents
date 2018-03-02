import React, { Component } from "react";

const items = [
  {
    name: "Amr"
  },
  {
    name: "JKad"
  },
  {
    name: "Batata"
  }
];

const Item = ({ name }) => <h2>{name}</h2>;

const List = ({ items }) => (
  <ul>
    {items.map(item => (
      <li>
        <Item name={item.name} />
      </li>
    ))}
  </ul>
);

export default class Page extends Component {
  constructor() {
    super();
    this.state = { filter: "" };
  }
  setFilter = filter => {
    this.setState({ filter });
  };
  onChange = evt => {
    const value = evt.target.value;
    this.setState({ filter: value });
  };
  render() {
    const filter = this.state.filter;
    const filtered_items = filter
      ? items.filter(item => item.name[0] == filter)
      : items;
    return (
      <div>
        <input value={filter} onChange={this.onChange} />
        <p>{filter || "none"}</p>
        <button onClick={() => this.setFilter("A")}>A</button>
        <button onClick={() => this.setFilter("")}>none</button>
        <List items={filtered_items} />
      </div>
    );
  }
}
