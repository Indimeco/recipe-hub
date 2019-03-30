import React from 'react';
import theme from '../styles/theme';

export const ColorProvider = React.createContext(theme.colors.root);

export const withColor = WrappedComponent => {
  return class coloredComponent extends React.Component {
    render() {
      const { color: propColor, ...restProps } = this.props;

      return (
        <ColorProvider.Consumer>
          {contextColor => {
            {
              console.log('____', WrappedComponent.name, '____');
              console.log('\tcontext:\t', theme.colors[contextColor]);
              console.log('\tprop:\t', theme.colors[propColor]);
              console.log('\n\n');
            }
            return (
              <WrappedComponent
                color={
                  propColor
                    ? theme.colors[propColor]
                    : theme.colors[contextColor]
                }
                {...this.props}
              />
            );
          }}
        </ColorProvider.Consumer>
      );
    }
  };
};

export default withColor;
