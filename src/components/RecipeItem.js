import React from 'react';
import RecipeItemControls from './RecipeItemControls';

export default class Nav extends React.Component {
  render() {
    return (
      <a key={this.props.name} href={this.props.link}>
        <h2>{this.props.name}</h2>
        <img src={this.props.preview} />
        <RecipeItemControls />
      </a>
    );
  }
}
