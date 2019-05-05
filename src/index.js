// Core
import React from 'react';
import ReactDOM from 'react-dom';

// Functionality
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from 'styled-react-modal';
import { ColorProvider } from './hocs/withColor';
import App from './components/App/App';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<ColorProvider.Provider value={'root'}>
			<ModalProvider>
				<App book={'1'} />
			</ModalProvider>
		</ColorProvider.Provider>
	</ThemeProvider>,
	document.getElementById('root')
);