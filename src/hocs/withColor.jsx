import React from 'react';
import theme from '../styles/theme';

export const ColorProvider = React.createContext(theme.colors.root);

export const withColor = WrappedComponent => {
  return class extends React.Component {
    constructor() {
      super();
    }

    render() {
      return (
        <ColorProvider.Consumer>
          {color => (
            <WrappedComponent color={theme.colors[color]} {...this.props} />
          )}
        </ColorProvider.Consumer>
      );
    }
  };
};

export default withColor;
