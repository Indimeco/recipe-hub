import React from 'react';

export default class Nav extends React.Component {
  render() {
    return (
      <a key={this.props.name} href={this.props.link}>
        <h2>{this.props.name}</h2>
        <img src={this.props.preview} />
      </a>
    );
  }
}
