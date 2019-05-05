import React from 'react';
import theme from '../styles/theme';

export const ColorProvider = React.createContext(theme.colors.root);

export const withColor = WrappedComponent => {
	return class coloredComponent extends React.Component {
		// getColor :: A, String -> Object
		getColor(color, context) {
			try {
				if (color) {
					if (typeof color === 'object') {
						return color;
					} else if (typeof color === 'string') {
						return theme.colors[color];
					}
				}

				if (typeof context === 'object') {
					return context;
				} else if (typeof context === 'string') {
					return theme.colors[context];
				}
				throw `Unhandled context type in withColor: ${context}`;
			} catch (err) {
				console.error(err);
			}
		}

		render() {
			const { color: propColor, ...restProps } = this.props;
			return (
				<ColorProvider.Consumer>
					{contextColor => {
						return (
							<WrappedComponent
								{...restProps}
								color={this.getColor(propColor, contextColor)}
							/>
						);
					}}
				</ColorProvider.Consumer>
			);
		}
	};
};

export default withColor;
