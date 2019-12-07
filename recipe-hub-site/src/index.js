import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from 'styled-react-modal';
import { ColorProvider } from './hocs/withColor';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<ColorProvider.Provider value={'root'}>
			<ModalProvider>
				<App bookId={'1'} />
			</ModalProvider>
		</ColorProvider.Provider>
	</ThemeProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
