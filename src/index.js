import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';

import {ThemeProvider} from 'styled-components';
import App from './App';
import theme from './theme';

ReactDOM.render(
	<BrowserRouter>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById('root'),
);
